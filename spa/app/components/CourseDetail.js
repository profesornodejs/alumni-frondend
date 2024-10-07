export function CourseDetail (props) {
const $courseDetail = document.createElement("article")
$courseDetail.innerHTML = '<p> curso: ${props.title} </p>'
return $courseDetail
}