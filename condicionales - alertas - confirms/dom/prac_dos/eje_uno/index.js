
let preg = prompt("Que dia es hoy?");
console.log(preg);

if (preg == "domingo"){ 
    document.querySelector(".respuesta").innerText = "¡Pongamos la olla, hoy se comen pastas!"
} else { 
    document.querySelector(".respuesta").innerText = "Mejor lo dejamos para el domingo"
}

