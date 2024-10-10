export function course() {
const $course = document.createElement("div")
let html = fetch("course.html").then(response => {response.text()})
$course.innerHTML = html
return $course
}