// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>animate slide menu</h1>`;

let marker = document.querySelector('#marker');
let items = document.querySelectorAll('nav a');

function indicator(e) {
  marker.style.left = e.offsetLeft+"px";
  marker.style.width = e.offsetWidth+"px";
}
items.forEach(link => {
  link.addEventListener('click',(e)=> {
    indicator(e.target)
  })
})