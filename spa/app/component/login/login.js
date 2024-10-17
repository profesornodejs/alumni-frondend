export function login() {

    const $login = document.createElement("div")
    $login.className = "login"
    $login.innerHTML = 
    `<form id="form" action="" method="post">
      <label for="usr">Usuario:</label>
      <input type="text" id="usr" name="usr">
      <label for="pwd">Password:</label>
      <input type="password" id="pwd" name="pwd">
      <p>
       <input type="submit" value="Enviar"> 
      </p>
    </form>
    `
        return $login  
    }