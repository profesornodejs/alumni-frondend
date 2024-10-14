
export function profile() {

const $content = document.createElement("div")
$content.id = "content"

    let dataUser = {
      "id": "670d5d1b43577eb2e2f1b645",
      "name": "mariano",
      "surname": "perez",
      "age": 23
  }

    $content.innerHTML = 
    `
    <h1> Informacion personal </h1>
    <br>
    <p>Nombre:${dataUser.name}</p>
    <p>Apellido:${dataUser.surname}</p>
    <p>Edad:${dataUser.age}</p>
    `
    return $content    
    }