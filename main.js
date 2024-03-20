import './style.css'
import { maquinasytecnologia } from './secciones';
import { materialDeportivo } from './secciones';
import { gastronomia } from './secciones';
const section=document.querySelector('section');   
const tecno=document.querySelector('#tecno');
  const sport=document.querySelector('#sport');
const foods=document.querySelector('#foods');
tecno.addEventListener("click", ()=>{
  section.innerHTML="";
  for (let i=0; i<maquinasytecnologia.length; i++){
    const producto = maquinasytecnologia[i]; 
const article=document.createElement('article');
article.innerHTML=`
<p>${producto.nombre}</p>
<img src=${producto.imagen} alt=${producto.nombre}/>
<p>${producto.precio}</p>
<p>${producto.disponible}</p>
`
section.appendChild(article);
  }
});
sport.addEventListener("click", ()=>{
  section.innerHTML="";
  for (let i=0; i<materialDeportivo.length; i++){
    const producto2=materialDeportivo[i];
 const article2=document.createElement('article');
 article2.innerHTML=`
 <p>${producto2.nombre}</p>
 <img src=${producto2.imagen} alt=${producto2.nombre}/>
 <p>${producto2.precio}</p>
 <p>${producto2.disponible}</p>
 `
 section.appendChild(article2);
  }
})
foods.addEventListener("click", ()=>{
  section.innerHTML="";
  for (let i=0; i<gastronomia.length; i++){
    const producto3 = gastronomia[i];
  const article3=document.createElement('article');
  article3.innerHTML=`
  <p>${producto3.nombre}</p>
  <img src=${producto3.imagen} alt=${producto3.nombre}/>
  <p>${producto3.precio}</p>
  <p>${producto3.disponible}</p>
  `
  section.appendChild(article3);
  }
})