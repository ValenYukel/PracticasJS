let dia = prompt("Que dia es?: ");
console.log(dia);

let hora = prompt("Que hora es?: ");
console.log(hora);

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "lunes", "martes", "miercoles", "jueves", "viernes"]

if (dias.includes(dia) & (hora > 10  && hora < 15)){ 
    document.querySelector(".respuesta").innerText =  "¡Bien! Todavía estamos a tiempo de llegar”"
} else { 
    document.querySelector(".respuesta").innerText = "Uf… No llegamos"
}