      import './style.css'
import { maquinasytecnologia } from './secciones';
import { materialDeportivo } from './secciones';
import { gastronomia } from './secciones';
const main=document.querySelector('main');   
const tecno=document.querySelector('#tecno');
const sport=document.querySelector('#sport');
const foods=document.querySelector('#foods');
tecno.addEventListener("click", ()=>{
  for (let i=0; i<maquinasytecnologia.length; i++){
    const producto = maquinasytecnologia[i]; 
const article=document.createElement('article')
article.innerHTML=`
<h3>${producto.nombre}</h3>
<h3>${producto.precio}</h3>
<h3>${producto.disponible}</h3>
`
main.appendChild(article);

  }
})