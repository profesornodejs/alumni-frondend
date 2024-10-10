import {routes} from "../spa/app/helper/constant.js"

export function locationHandle() {
    let location = window.location.hash.replace("#","")
    const router = routes[location]
    const html = fetch(router.template).then(data => data.text())
    const content = document.getElementById("content")
    content.innerHTML = html
}