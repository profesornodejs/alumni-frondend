import { course } from "../components/Course";

export function getCourse() {
   

fetch("http://localhost:8091/api/v1/course")
.then(data => {
 console.log("get data: " +  data.json())
 
 const courseElement = document.getElementById("courseId")
 let html = ""
data.array.forEach(course => {
    html += 
});

})
.catch(error => {
 console.log("error al intentar optener la informacion")
})
}