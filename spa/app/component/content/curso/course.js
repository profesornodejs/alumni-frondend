import { item } from "../item/item.js"

export function course() {

    const $article = document.createElement("article")
    $article.className = "main"
    $article.id = "main"

    const $content = document.createElement("div")
    $content.id = "content"

    //simulacion API rest
    let courses = [
        {
            "title": "NodeJs introduccion",
            "description": "curso basico de nodejs sin experiencia previa",
            "type": "programacion"
        },
        {
            "title": "MongoDb introduccion ",
            "description": "curso basico de mongodb sin experiencia previa",
            "type": "programacion"
        }
    ]

    for(const course of courses) {
        $content.appendChild(item(course))
      }

    $article.appendChild($content)

return $article

}