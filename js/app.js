import { projectData } from "./project-data.js";

const cardContainer = document.getElementById('card-container')
const about = document.getElementById('about')
console.log(about)

let projectMarkup = projectData.map(project =>
  `<nav id="nav card-container">
  <a class="nav-link active">${project.title}</a>
  <div class="icons">
  <a class="fa fa-github-square"style="font-size:18px; color: silver" href="${project.github}"></a>
  <a class="fa fa-rocket"style="font-size:18px; color: silver" href="${project.deployment}"></a></div>
</nav>`
).join('')
cardContainer.innerHTML = projectMarkup

about.addEventListener('click', toggleAbout)

function toggleAbout(){
  
}