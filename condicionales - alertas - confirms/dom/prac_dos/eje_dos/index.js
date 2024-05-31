let num = prompt("Ingresa un numero: ");
console.log(num);

let num2 = prompt("Ingresa otro numero: ");
console.log(num2);

if (num > num2){ 
    document.querySelector(".respuesta").innerText =  num + " es el número mayor"
} else { 
    document.querySelector(".respuesta").innerText = num2 + " es el número mayor"
}
