import {apiRestConstants} from '../helper/constant.js'

export function loginService(props) {

let user = props.user
let password = props.password

const apiRestConstants = apiRestConstants()

let urlFinal = apiRestConstants.urlLogin + "?" + "user=" + user + "&" + "password=" + password

let data = fetch(urlFinal)
.then((data) => {data.json()})
.catch((error) => {
 console.error("se produjo un error al llamar al servicio de login")
})

return data

}
