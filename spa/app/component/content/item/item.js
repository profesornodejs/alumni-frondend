export function item(props) {

const title = props.title
const description = props.description
const type = props.type


const $item = document.createElement("div")
$item.innerHTML =
`<p> curso:${title}</p>
 <p> descripcion:${description}</p>
 <p> tipo:${type}</p>
 <br>
`
return $item
}