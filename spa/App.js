import { menu } from "./app/component/menu/menu.js"
import { header } from "./app/component/header/header.js"

export function App() {
const d = document.getElementById("root")
d.appendChild(header())
d.appendChild(menu())
}