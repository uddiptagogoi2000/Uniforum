import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  body: "#eee",
};

const fonts = {
  logo: "Averia Serif Libre",
};

const theme = extendTheme({ fonts });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
