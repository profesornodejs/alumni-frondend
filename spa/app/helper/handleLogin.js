import { loginService } from "../service/loginService.js"

export function handleLogin(event) {

    const d = document.getElementById("root")

    const $form = document.getElementById("form")

    event.preventDefault()
    const form = new FormData(this)

    const props = {
        user: form.get('usr'),
        password: form.get('password')

    }

    const data = loginService(props)

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