export function menu() {
const $menu = document.createElement("div")
$menu.id = "menu"
let html = fetch("menu.html").then(response => {response.text()})
$menu.innerHTML = html
return $menu
}