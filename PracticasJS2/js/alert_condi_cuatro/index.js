let mensaje = "Cual es tu nacionalidad?";
let nacionalidad = prompt(mensaje);
console.log(nacionalidad);

let mensaje2 = "Cual es tu profesion?";
let profesion = prompt(mensaje2);
console.log(profesion);

let mensaje3 = "Cuantos km caminas por dia?";
let kms = prompt(mensaje3);
console.log(kms);

function filosofoHipster(nacionalidad, profesion, kmsRecorridos){
    if (nacionalidad == "Argentino" && profesion == "Músico" && kmsRecorridos >= 2){ 
        console.log("Soy un filósofo hipster")

    } else { 
        console.log("Aun no soy filósofo hipster") 
     }
 };
 console.log(filosofoHipster(nacionalidad,profesion,kms));