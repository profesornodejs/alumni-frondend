export function footer(){
 const $footer = document.createElement("footer")
 $footer.className = "footer"
 $footer.innerHTML =
`<div>
   <h3>Siguenos</h3>
      <a href='https://www.facebook.com/EducacionIT/' target='_blank'>Facebook</a>
      <a href='https://www.instagram.com/educacionit/' target='_blank'>Instagram</a>
 </div>  
`
return $footer
}