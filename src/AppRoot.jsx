import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App.jsx";
import "./i18n/config.js";
import "./styles.css";
import { system } from "./theme/system.js";

function AppRoot() {
  return (
    <React.StrictMode>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default AppRoot;
