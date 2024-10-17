import { header } from './app/component/cabezera/header.js'
import { menu } from './app/component/menu/menu.js'
import { footer } from './app/component/pie/footer.js'
import { course } from './app/component/content/curso/course.js'

import { login } from './app/component/login/login.js'

import {handleLogin} from './app/helper/handleLogin.js'

export function App() {
    const d = document.getElementById("root")
    d.appendChild(login())
    const $form = document.getElementById("form")
    $form.addEventListener("submit", handleLogin)
}