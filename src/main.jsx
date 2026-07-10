import { createRoot, hydrateRoot } from "react-dom/client";

import AppRoot from "./AppRoot.jsx";

const rootElement = document.getElementById("root");
const hasPrerenderedHtml =
  rootElement.innerHTML.trim() !== "" &&
  !rootElement.innerHTML.includes("app-html");

if (hasPrerenderedHtml) {
  hydrateRoot(rootElement, <AppRoot />);
} else {
  createRoot(rootElement).render(<AppRoot />);
}
