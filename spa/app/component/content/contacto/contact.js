export function contact() {

const $content = document.createElement("div")
$content.id = "content"

$content.innerHTML = 
`
<form action="/my-handling-form-page" method="post">
  <p>Nombre: <input type="text" name="nombre" size="40"></p>
  <p>Email: <input type="email" name="user_mail"/></p>
  <label for="msg">Mensaje:</label>
  <textarea id="msg" name="user_message"></textarea>
  <p>
    <input type="submit" value="Enviar">
  </p>
</form>
`
    return $content    
}