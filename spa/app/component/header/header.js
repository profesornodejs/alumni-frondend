export function header() {
const $header = document.createElement("div")
$header.id = "header"
let html = fetch("header.html").then(response => {response.text()})
$header.innerHTML = html
return $header
}