import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* 
Homework 7/18/2022

Password Toggle

Utilizing state management, synthetic events, and conditional rendering,
create a password input that can be toggled between showing plain text 
and the character representation.

The button text should toggle appropriately.


EX:

[******  ][show]
[arlen's password  ][hide]
*/
