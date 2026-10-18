import ScrollScene from "./scroll-scene";
import ClientGallery from "./client-gallery";
import MobileNavigation from "./mobile-navigation";
import OrderDeviceShowcase from "./order-device-showcase";
import ReviewCarousel from "./review-carousel";
import { clients, products, projects, quotationDetails, reviews, services, whatsappUrl } from "./homepage-content";
import { FaFacebookF, FaGooglePlay, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Chacha G Graphics home">
          <img src="/assets/chacha-g-logo-white.svg" alt="Chacha G Graphics" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#order-online">Order online</a>
          <a href="#location">Location</a>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Request a quotation
          </a>
        </nav>

        <MobileNavigation quotationUrl={whatsappUrl} />
      </header>

      <main id="main">
        <section className="immersive-scene" id="immersive-scene" aria-label="Scroll-driven dimensional signage story">
          <div className="scene-sticky">
            <ScrollScene />
            <div className="scene-vignette" aria-hidden="true" />
            <div className="scene-interface" aria-hidden="true">
              <span>Scroll to view our capabilities</span>
              <div><i /></div>
              <span>01 — 04</span>
            </div>
          </div>

          <div className="scene-chapters">
            <article className="scene-chapter chapter-intro" id="top">
              <div className="chapter-copy">
                <p className="scene-label">Signage · Printing · Office branding</p>
                <h1>Make your<br />brand <em>stand out.</em></h1>
                <p>Signage that gets noticed. Print that makes an impression. Designed, produced and installed by one team in Odisha.</p>
                <div className="scene-actions">
                  <a className="button button-glow" href={whatsappUrl} target="_blank" rel="noreferrer">
                    Request a quotation <span aria-hidden="true">↗</span>
                  </a>
                  <a className="button button-order-online" href="#order-online">
                    Order online <span aria-hidden="true">↓</span>
                  </a>
                </div>
                <div className="intro-proof"><span><b>4.9/5</b> Google rating</span><span>Design <i>→</i> Production <i>→</i> Installation</span></div>
              </div>
              <figure className="intro-showcase">
                <img src="/assets/studio-campaign-v2/illuminated-signage-installation.webp" alt="Concept visual of dimensional Chacha G Graphics lettering with warm edge lighting" width="900" height="1100" fetchPriority="high" />
                <figcaption><span>LIGHT UP YOUR BRAND</span><strong>Made to be seen.</strong><small>Illuminated signage · Concept visual</small></figcaption>
                <a href="#work" className="showcase-link" aria-label="Explore products and applications">↗</a>
              </figure>
            </article>

            <article className="scene-chapter chapter-right">
              <div className="chapter-copy chapter-panel">
                <p className="scene-label">01 / Requirement</p>
                <h2>Clear scope. Right material.</h2>
                <p>We confirm the size, quantity, material, finish and installation requirement before production.</p>
              </div>
            </article>

            <article className="scene-chapter">
              <div className="chapter-copy chapter-panel">
                <p className="scene-label">02 / Production</p>
                <h2>Easy to read. Built for the location.</h2>
                <p>Each sign is planned for visibility, indoor or outdoor use, fixing method and regular maintenance.</p>
              </div>
            </article>

            <article className="scene-chapter chapter-right chapter-final">
              <div className="chapter-copy chapter-panel">
                <p className="scene-label">03 / Delivery</p>
                <h2>One team from design to installation.</h2>
                <p>View our capability for office signs, safety boards, facility branding, banners and printed material.</p>
                <a className="scene-link" href="#work">View products and services <span aria-hidden="true">↓</span></a>
              </div>
            </article>
          </div>
        </section>

        <div className="motion-band" aria-label="Products and services">
          <div className="motion-track">
            {[...products, ...products].map((product, index) => (
              <span className="motion-item" aria-hidden={index >= products.length || undefined} key={`${product}-${index}`}>
                {product}<i aria-hidden="true">◆</i>
              </span>
            ))}
          </div>
        </div>

        <ClientGallery clients={clients} />

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-kicker">Products and applications</p>
            <h2 id="work-title">What we can design, produce and install.</h2>
            <p>Representative concept visuals. Final work is supplied according to the approved size, material, quantity and specifications.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.className}`} key={project.title}>
                <figure>
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    width="900"
                    height="700"
                  />
                </figure>
                <div className="project-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><p>{project.category}</p><h3>{project.title}</h3></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="services-intro">
            <p className="section-kicker">Products and services</p>
            <h2 id="services-title">What you can order from us.</h2>
            <p>Suitable for offices, institutions, industrial sites, public-facing facilities and commercial premises.</p>
          </div>
          <div className="services-list">
            {services.map((service) => (
              <article className="service-row" key={service.title}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="material-section" aria-labelledby="material-title">
          <div className="material-copy">
            <p className="section-kicker">Before quotation</p>
            <h2 id="material-title">Details we confirm before production.</h2>
            <p>Clear specifications help procurement teams compare the scope, material, quantity and installation requirement.</p>
          </div>
          <div className="specification-list" aria-label="Quotation and production details">
            {quotationDetails.map(([number, title, text]) => (
              <article className="specification-item" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <figure className="about-image">
            <img
              src="/assets/studio-campaign-v2/signage-production-workshop.webp"
              alt="Concept close-up of a craftsperson finishing an orange acrylic letter at a workbench"
              loading="lazy"
              width="1200"
              height="900"
            />
            <figcaption>Concept visual</figcaption>
          </figure>
          <div className="about-copy">
            <p className="section-kicker">About us</p>
            <h2 id="about-title">Local production and practical support.</h2>
            <p>
              Chacha G Graphics is a signage, office-branding and printing service provider based in Odisha. We work with offices, industries, institutions, shops and local businesses.
            </p>
            <p>
              We support requirement review, design preparation, material selection, production, delivery and installation. Communication is available in Odia and English.
            </p>
            <div className="studio-facts">
              <div><strong>4.9/5</strong><span>Google rating</span></div>
              <div><strong>66+</strong><span>public reviews</span></div>
              <div><strong>End-to-end</strong><span>support from design to installation</span></div>
            </div>
          </div>
        </section>

        <section className="process-section" aria-labelledby="process-title">
          <div className="section-heading compact">
            <p className="section-kicker">Order process</p>
            <h2 id="process-title">A clear process from requirement to delivery.</h2>
          </div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Share the requirement</h3><p>Send the item, size, quantity, delivery location, reference and required date.</p></div></li>
            <li><span>02</span><div><h3>Review quotation and design</h3><p>Confirm the scope, material, price and final design before production.</p></div></li>
            <li><span>03</span><div><h3>Production and delivery</h3><p>After approval, we produce the items and arrange delivery or installation as agreed.</p></div></li>
          </ol>
        </section>

        <section className="online-order-section" id="order-online" aria-labelledby="online-order-title">
          <div className="online-order-heading">
            <p className="section-kicker">Digital ordering</p>
            <h2 id="online-order-title">Order online or use our mobile app.</h2>
            <p>
              For standard products and repeat orders, you will be able to place an order online. For custom signage, site work or procurement enquiries, please request a quotation.
            </p>
          </div>
          <div className="online-order-options">
            <article className="online-order-card">
              <div className="online-order-card-copy">
                <span className="online-order-number">01</span>
                <div>
                  <p className="online-order-type">Ordering website</p>
                  <h3>Browse products and place an online order.</h3>
                  <p>Use the website for available products, quantities, delivery details and order updates.</p>
                </div>
                <span className="online-order-pending" aria-label="Online ordering website link coming soon">
                  Website link coming soon
                </span>
              </div>
              <OrderDeviceShowcase
                device="laptop"
                image="/assets/app-showcase/chachag-app-desktop.png"
                alt="Chachag App ordering homepage displayed on a laptop"
              />
            </article>
            <article className="online-order-card">
              <OrderDeviceShowcase
                device="phone"
                image="/assets/app-showcase/chachag-app-mobile.png"
                alt="Chachag App ordering homepage displayed on a mobile phone"
              />
              <div className="online-order-card-copy">
                <span className="online-order-number">02</span>
                <div>
                  <p className="online-order-type">Mobile app</p>
                  <h3>Order and follow updates from your phone.</h3>
                  <p>Download the Chacha G Graphics ordering app when the app-store link is connected.</p>
                </div>
                <span className="online-order-pending" aria-label="Mobile app-store link coming soon">
                  App-store link coming soon
                </span>
              </div>
            </article>
          </div>
          <div className="online-order-note">
            <span>Custom or institutional requirement?</span>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Request a quotation <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="review-section" aria-label="Customer reviews">
          <div className="review-summary">
            <p className="section-kicker">Customer feedback</p>
            <div className="review-score"><strong>4.9<small>/5</small></strong><span aria-label="Five out of five stars">★★★★★</span></div>
            <div><h2>What customers say about our work.</h2><p>Browse selected feedback from our public Google Business Profile.</p></div>
          </div>
          <ReviewCarousel reviews={reviews} />
        </section>

        <section className="location-section" id="location" aria-labelledby="location-title">
          <div className="location-copy">
            <p className="section-kicker">Find our office</p>
            <h2 id="location-title">Visit us in Choudwar.</h2>
            <p>Near Aahar Kendra, Gandhi Chhak, Choudwar, Odisha 754071</p>
            <a href="https://maps.app.goo.gl/3rvcvFrTMQtirerm7" target="_blank" rel="noreferrer">
              Open in Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title="Map showing Chacha G Graphics in Choudwar"
              src="https://www.google.com/maps?q=Near%20Aahar%20Kendra%2C%20Gandhi%20Chhak%2C%20Choudwar%2C%20Odisha%20754071&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="section-kicker">Request a quotation</p>
            <h2 id="contact-title">Share your requirement with us.</h2>
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
              Request on WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-details">
            <div><span>Office</span><div className="contact-links"><a href="https://maps.app.goo.gl/3rvcvFrTMQtirerm7" target="_blank" rel="noreferrer">Near Aahar Kendra, Gandhi Chhak<br />Choudwar, Odisha 754071</a></div></div>
            <div><span>Phone</span><div className="contact-links"><a href="tel:+917978017115">+91 79780 17115</a><a href="tel:+917539814620">+91 75398 14620</a></div></div>
            <div><span>Email</span><div className="contact-links"><a className="contact-email-link" href="mailto:chachaggraphics@gmail.com">chachaggraphics@gmail.com <span aria-hidden="true">↗</span></a></div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img src="/assets/chacha-g-logo-white.svg" alt="Chacha G Graphics" />
        <div className="footer-links" aria-label="Social links">
          <a className="footer-social-link" href="https://www.instagram.com/chachaggraphics/?hl=en" target="_blank" rel="noreferrer"><FaInstagram aria-hidden="true" /> <span>Instagram</span></a>
          <a className="footer-social-link" href="https://www.facebook.com/profile.php?id=100084567510043" target="_blank" rel="noreferrer"><FaFacebookF aria-hidden="true" /> <span>Facebook</span></a>
          <a className="footer-social-link" href="https://www.youtube.com/@chachaggraphics1823" target="_blank" rel="noreferrer"><FaYoutube aria-hidden="true" /> <span>YouTube</span></a>
          <span className="footer-social-link footer-social-pending" aria-label="Google Play link coming soon"><FaGooglePlay aria-hidden="true" /> <span>Google Play</span><small>Coming soon</small></span>
        </div>
        <p>© 2026 Chacha G Graphics</p>
      </footer>
    </>
  );
}
