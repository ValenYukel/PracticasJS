let num = prompt("Ingresa un numero: ");
console.log(num);

if (num > 0){ 
    document.querySelector(".respuesta").innerText =  "El numero " + num + " es positivo"
} else if (num < 0){ 
    document.querySelector(".respuesta").innerText = "El numero " + num + " es negativo"
}else{ 
    document.querySelector(".respuesta").innerText = "El numero " + num + " es cero"
}

