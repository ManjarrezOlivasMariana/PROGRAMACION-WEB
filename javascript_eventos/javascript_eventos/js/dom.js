let titulo=document.querySelector("h1");
console.log(titulo);
let principal=document.querySelector(".principal");
console.log(principal);
let lista=document.querySelectorAll("ul.lista > li");
console.log(lista);
titulo.innerText="ESTRUCTURANDO DEL DOM - VB";

let foto=document.querySelector("img");
foto.setAttribute("src", "img/logo_javascript2.png");
foto.classList.add(foto_cambio);


principal.style.background="#FFCC00";

let extra=document.querySelector(".extra");
document.body.removeChild(extra);

let nuevoarticle=document.createElement("article");
nuevoarticle.innerText="Nuevo Article";
nuevoarticle.styyle.color="whithe";
nuevoarticle.style.padding="20px";
document.body.appendChild(nuevoarticle);

let boton=document.querySelector("button");
boton.addEventListener("click", () =>{
    alert("boton presionado");
});




