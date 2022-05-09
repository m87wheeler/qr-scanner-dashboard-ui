import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { GlobalStyles } from "./styles/global";

const container = document.querySelector("#root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
