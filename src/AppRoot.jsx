import React from "react";
import { ChakraProvider, createToaster } from "@chakra-ui/react";

import App from "./App.jsx";
import "./i18n/config.js";
import "./styles.css";
import { system } from "./theme/system.js";

const toaster = createToaster({
  placement: "bottom-end",
  duration: 5000,
});

function AppRoot() {
  return (
    <React.StrictMode>
      <ChakraProvider value={system}>
        <App toaster={toaster} />
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default AppRoot;
