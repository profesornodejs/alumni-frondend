export function menu() {
const $menu = document.createElement("nav")
$menu.className = "navbar"
$menu.innerHTML =
`<div>
 <nav>
 <p>
 <a href="#contact">Contacto</a>
 </p>
 <p>
 <a href="#profile">perfil</a>
 </p>
 </nav>
</div>
`
return $menu
}