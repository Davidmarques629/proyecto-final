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
const article=document.createElement('article');
article.innerHTML=`
<p>${producto.nombre}</p>
<p>${producto.precio}</p>
<p>${producto.disponible}</p>
`
main.appendChild(article);
  }
});
sport.addEventListener("click", ()=>{
  for (let i=0; i<materialDeportivo.length; i++){
    const producto2=materialDeportivo[i];
 const article2=document.createElement('article');
 article2.innerHTML=`
 <p>${producto2.nombre}</p>
 <p>${producto2.precio}</p>
 <p>${producto2.disponible}</p>
 `
main.appendChild(article2);
  }
})
foods.addEventListener("click", ()=>{
  for (let i=0; i<gastronomia.length; i++){
    const producto3 = gastronomia[i];
  const article3=document.createElement('article');
  article3.innerHTML=`
  <p>${producto3.nombre}</p>
  <p>${producto3.precio}</p>
  <p>${producto3.disponible}</p>
  `
  main.appendChild(article3);
  }
})