import { header } from './app/component/cabezera/header.js'
import { menu } from './app/component/menu/menu.js'
import { footer } from './app/component/pie/footer.js'
import { course } from './app/component/content/curso/course.js'

import { login } from './app/component/login/login.js'

export function App() {
    const d = document.getElementById("root")
    d.appendChild(login())

    const $form = document.getElementById("form")
    $form.addEventListener("submit", handleLogin)

    function handleLogin(event) {
        event.preventDefault()
        const form = new FormData(this)

        let user = form.get('usr')
        let password = form.get('password')

        let dataUser = {
            "id": "670d5d1b43577eb2e2f1b645",
            "name": "mariano",
            "surname": "perez",
            "age": 23
        }

        if (dataUser) {
            console.log("Loanding home Page..")
            $form.remove()
            
            d.appendChild(header())
            d.appendChild(menu())
            d.appendChild(course())
            d.appendChild(footer())
        } else {
            window.alert('Contreña incorrecta')
        }
    }

}