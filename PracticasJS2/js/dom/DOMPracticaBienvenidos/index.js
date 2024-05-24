console.log(alert("Bienvenidos a mi sitio."));

let segu = "¿Está seguro de querer avanzar?";
let seguro = confirm(segu);
console.log(seguro);

if (seguro == true){ 
    document.querySelector(".saludo").innerText = "Qué alegría que quieras continuar tu visita"

    let preg_nom = "Cual es su nombre?";
    let nombre = prompt(preg_nom);
    console.log(nombre);

    document.querySelector("h1").innerText = "Bienvenido " + nombre
    
    let preg_edad = "¿Cuántos años tenés?";
    let edad = prompt(preg_edad);
    console.log(edad);

    if (edad > 17){

        let gusta1 = "¿Te gusta la programación?";
        let gusta2 = confirm(gusta1);
        console.log(gusta2);

        if (gusta2 == true){ 
           let fondo =  document.querySelector(".background-img")
           fondo.style.backgroundImage = "url('img/programmer.jpeg')";
        } else { 
            let fondo =  document.querySelector(".background-img")
            fondo.style.backgroundImage = "url('img/gatito.jpeg')";
        }

    let imagen = document.querySelector(".avatar")

    let pedir_img = "Tienes una ruta de imagen?"
    
    let pedir = prompt(pedir_img)
    console.log(pedir)
    
    let ruta_img = pedir

    if (ruta_img){ 
        
        imagen.src = ruta_img;
    } 

   let peli =  prompt("Cual es el nombre de tu pelicula favorita?");
   let director = prompt("Quien la dirije?");
   let duracion =  prompt("Cuanto dura?");
   let actor =  prompt("Quien actua?");

    let pelicula = { 
        nombre: peli,
        director:  director,
        duracion: duracion,
        actor: actor
    };

    document.querySelector("#nombre").innerText = pelicula.nombre;
    document.querySelector("#director").innerText = pelicula.director;
    document.querySelector("#duracion").innerText = pelicula.duracion;
    document.querySelector("#actor").innerText = pelicula.actor;


 
let pelis = document.querySelector(".contenido-bloqueado");
pelis.style.display = "block";

} else { 
        let containerGeneral = document.querySelector(".container-general");
        containerGeneral.style.display = "none";


        let accesoDenegado = document.querySelector("#accesoDenegado");
        accesoDenegado.style.display = "block";
    }



} else { 
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita"

}