"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MODEL_URL = "/assets/models/kamran.glb";

export default function ScrollScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    const section = document.getElementById("immersive-scene");
    if (!mount || !section) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      mount.classList.add("webgl-unavailable");
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.className = "webgl-canvas";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x12110f, 0.062);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.1, 8.4);

    scene.add(new THREE.HemisphereLight(0xfff3dc, 0x4a1f18, 2.4));

    const keyLight = new THREE.DirectionalLight(0xffe7c7, 5.8);
    keyLight.position.set(4.5, 6.5, 7);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xe05d3f, 36, 18, 2);
    rimLight.position.set(-5, -1.5, 4);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0x8aa8ff, 12, 14, 2);
    fillLight.position.set(4, -2.5, -2);
    scene.add(fillLight);

    const root = new THREE.Group();
    scene.add(root);

    const modelPivot = new THREE.Group();
    modelPivot.rotation.y = -Math.PI / 2;
    root.add(modelPivot);

    let disposed = false;
    const disposeObject = (object: THREE.Object3D) => {
      object.traverse((child) => {
        if (child instanceof THREE.Mesh || child instanceof THREE.Points) {
          child.geometry.dispose();
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          materials.forEach((material) => {
            if ("map" in material && material.map instanceof THREE.Texture) material.map.dispose();
            material.dispose();
          });
        }
      });
    };

    const loader = new GLTFLoader();
    loader.load(
      MODEL_URL,
      (gltf) => {
        const model = gltf.scene;
        if (disposed) {
          disposeObject(model);
          return;
        }

        model.updateMatrixWorld(true);
        const bounds = new THREE.Box3().setFromObject(model);
        const size = bounds.getSize(new THREE.Vector3());
        const center = bounds.getCenter(new THREE.Vector3());
        const longestSide = Math.max(size.x, size.y, size.z, 0.001);

        model.position.sub(center);
        model.scale.setScalar(5.65 / longestSide);
        model.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          child.castShadow = true;
          child.receiveShadow = true;
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          materials.forEach((material) => {
            material.side = THREE.DoubleSide;
            material.needsUpdate = true;
          });
        });

        modelPivot.add(model);
        mount.classList.add("model-loaded");
      },
      undefined,
      () => {
        if (!disposed) mount.classList.add("model-load-failed");
      },
    );

    const ringOne = new THREE.Mesh(
      new THREE.TorusGeometry(3.55, 0.025, 12, 140),
      new THREE.MeshBasicMaterial({ color: 0xf1d5ae, transparent: true, opacity: 0.5 }),
    );
    ringOne.rotation.x = 1.12;
    ringOne.rotation.y = 0.22;
    root.add(ringOne);

    const ringTwo = new THREE.Mesh(
      new THREE.TorusGeometry(2.82, 0.018, 10, 120),
      new THREE.MeshBasicMaterial({ color: 0xc9664d, transparent: true, opacity: 0.56 }),
    );
    ringTwo.rotation.set(0.35, 1.18, 0.44);
    root.add(ringTwo);

    const particleCount = 150;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      particlePositions[index * 3] = (Math.random() - 0.5) * 14;
      particlePositions[index * 3 + 1] = (Math.random() - 0.5) * 9;
      particlePositions[index * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0xf5d3a8,
        size: 0.035,
        transparent: true,
        opacity: 0.54,
        depthWrite: false,
      }),
    );
    scene.add(particles);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.24 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2.35;
    ground.receiveShadow = true;
    scene.add(ground);

    let targetProgress = 0;
    let smoothProgress = 0;
    let animationFrame = 0;
    let noMotion = false;
    const pointer = new THREE.Vector2();
    const pointerTarget = new THREE.Vector2();
    const startTime = performance.now();
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      noMotion = motionQuery.matches;
    };
    updateMotionPreference();

    const updateScroll = () => {
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      targetProgress = THREE.MathUtils.clamp(-rect.top / distance, 0, 1);
      section.style.setProperty("--scene-progress", targetProgress.toFixed(4));
      section.style.setProperty("--scene-progress-pct", `${(targetProgress * 100).toFixed(2)}%`);
    };

    const updatePointer = (clientX: number, clientY: number) => {
      pointerTarget.x = (clientX / window.innerWidth) * 2 - 1;
      pointerTarget.y = -((clientY / window.innerHeight) * 2 - 1);
    };
    const onPointerMove = (event: PointerEvent) => updatePointer(event.clientX, event.clientY);
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) updatePointer(touch.clientX, touch.clientY);
    };

    const resize = () => {
      const width = Math.max(1, mount.clientWidth);
      const height = Math.max(1, mount.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 700 ? 1.35 : 1.8));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.fov = window.innerWidth < 700 ? 48 : 38;
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      smoothProgress += (targetProgress - smoothProgress) * (noMotion ? 1 : 0.065);
      pointer.lerp(pointerTarget, 0.055);
      const progress = noMotion ? 0.08 : smoothProgress;

      root.rotation.y = -0.36 + progress * 5.45 + pointer.x * (noMotion ? 0 : 0.09);
      root.rotation.x = -0.03 + Math.sin(progress * Math.PI * 2) * 0.14 + pointer.y * (noMotion ? 0 : 0.05);
      root.rotation.z = Math.sin(progress * Math.PI * 3) * 0.045;
      const isMobile = window.innerWidth < 700;
      const lateralTravel = isMobile ? 0.12 : 1.12;
      const responsiveScale = isMobile ? 0.78 : 1;
      root.position.x = Math.cos(progress * Math.PI * 3) * lateralTravel;
      root.position.y = Math.sin(progress * Math.PI) * 0.24;
      root.scale.setScalar(responsiveScale * (1 - Math.sin(progress * Math.PI) * 0.08));

      modelPivot.position.y = noMotion ? 0 : Math.sin(elapsed * 0.72) * 0.045;
      ringOne.rotation.z = progress * 3.2 + (noMotion ? 0 : elapsed * 0.035);
      ringTwo.rotation.x = 0.35 + progress * 2.2;
      ringTwo.rotation.z = 0.44 - progress * 2.8;
      if (!noMotion) particles.rotation.y = elapsed * 0.025 + progress * 1.4;

      camera.position.x = Math.sin(progress * Math.PI * 1.6) * (isMobile ? 0.06 : 0.22);
      camera.position.y = 0.12 + Math.sin(progress * Math.PI * 2) * 0.24;
      camera.position.z = (isMobile ? 9.3 : 8.4) - Math.sin(progress * Math.PI) * 0.85;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    updateScroll();
    resize();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    motionQuery.addEventListener("change", updateMotionPreference);
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      motionQuery.removeEventListener("change", updateMotionPreference);
      disposeObject(scene);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="scene-canvas-wrap" ref={mountRef} />;
}
