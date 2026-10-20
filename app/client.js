import { hydrateRoot } from "react-dom/client";
import Home from "./page.js";
import { startAtTop } from "./start-at-top.js";

startAtTop();
hydrateRoot(document.getElementById("root"), <Home />);
