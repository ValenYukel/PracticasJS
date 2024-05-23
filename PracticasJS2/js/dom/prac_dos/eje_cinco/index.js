let dark = "¿Querés aplicar dark mode en el sitio?";
let preg = confirm(dark);
console.log(preg);

if (preg == true){ 
    let body = document.querySelector("body");
    body.style.backgroundColor = "#444";

    let letra = document.querySelector("p");
    letra.style.backgroundColor = "#fff";

    document.querySelector(".respuesta").innerText = "Dark Mode activado";

} else { 
    document.querySelector(".respuesta").innerText = "Ok. Lo activo en otro momento.";
}