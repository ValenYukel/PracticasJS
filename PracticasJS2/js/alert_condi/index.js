let mensaje = "¿Vas a salir de tu casa?";
let pregunta = confirm(mensaje);
console.log(pregunta);

if (pregunta == true) { 
    let texto = "Chequeá el pronóstico del tiempo antes de salir"
    let aviso = alert(texto)
    console.log(aviso)
} else { 
    let texto = "Que bueno que te quedes. Va a llover mucho hoy."
    let aviso = alert(texto)
    console.log(aviso)
}