import {App} from "./App.js";
import {locationHandle} from "./app/router/mainRouter.js"

document.addEventListener("DOMContentLoaded",App)
window.addEventListener("hashchange",locationHandle)

