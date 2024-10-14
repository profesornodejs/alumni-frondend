import {contact} from "../component/content/contacto/contact.js"
import {course} from "../component/content/curso/course.js"
import { profile } from "../component/content/profile/profile.js";

export function handleRouter() {
        let location = window.location.hash.replace("#", "");

        if(location == 'contact') {
        const $main = document.getElementById("main")

        const $content = document.getElementById("content")
        $main.removeChild($content);
        
        $main.appendChild(contact())

        } else if (location == 'profile') {
        const $main = document.getElementById("main")

        const $content = document.getElementById("content")
        $main.removeChild($content);
        
        $main.appendChild(profile())
      
        }
}