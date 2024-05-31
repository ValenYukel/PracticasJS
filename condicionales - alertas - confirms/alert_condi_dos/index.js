let mensaje = "Cual es tu nombre?";
let nombre = prompt(mensaje);
console.log(nombre);

let mensaje2 = "Cual es tu edad?";
let edad = prompt(mensaje2);
console.log(edad);

let mensaje3 = "Te gustan los deportes?";
let fanDeportes = confirm(mensaje3);
console.log(fanDeportes);

let mensaje4 = alert("Muchas gracias " + nombre + " por responder nuestras preguntas." );
console.log(mensaje4);

let usuario = {
    nombre: nombre,
    edad: edad,
    deportistaProfesional: function(variable) {
       if (variable == true) {
        console.log("Si, soy fan de los deportes")
     }else{
        console.log("No soy tan fan aún de los deportes")
     }
    }

}
console.log(usuario.deportistaProfesional(fanDeportes));


