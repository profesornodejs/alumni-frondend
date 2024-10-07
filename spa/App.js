import { Title } from "./app/components/Title.js";
import { course } from "./app/components/Course.js";

import { getCourse } from "./app/helpers/courseApi.js";


export function App() {
const d = document.getElementById("root")
d.appendChild(Title())
d.appendChild(course())
}