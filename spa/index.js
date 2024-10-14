import {App} from "./App.js";
import { handleRouter } from "./app/router/handleRouter.js";


document.addEventListener("DOMContentLoaded",App)

window.addEventListener("hashchange", handleRouter);



