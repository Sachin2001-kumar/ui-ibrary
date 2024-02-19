import { createUI } from "./node_modules/my-ui-library";

const root = document.getElementById("app");
const initialState = { count: 0 };

const ui = createUI(root, initialState);
