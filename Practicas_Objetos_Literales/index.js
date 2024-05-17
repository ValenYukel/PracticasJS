const hello = "Hello World!";
console.log(hello);

let misDatos = {
    nombre : "Valentino" ,
    apellido : "Yukelson",
    dni : 46579563,
    comidasFavoritas : ["China", "Sushi", "Asado"],
    saludar : function() {
    return 'Hola mi nombre es '  + this.nombre + " " + this.apellido + " y tengo 18 años. Mi primer comida favorita es " + this.comidasFavoritas[0];
    }
};
console.log(misDatos.saludar())

let auto = {
    marca: "Audi",
    modelo: "A5",
    año: 2024,
    color: "plateado",
    posicion: 0,
    avanzar: function(n) {
       n  > 0;
       this.posicion += n;
      },
      
    retroceder: function(n) {
        n > 0;
        this.posicion -= n;
       }
};

auto.retroceder(1)
auto.avanzar(5)
console.log(auto.posicion);


let nuevoAuto = {
    marca: "Audi",
    modelo: "A5",
    año: 2024,
    color: "plateado",
    posicion: 0,
    moverse: function(n){
        this.posicion =+ n;
        return(this.posicion);
       }
};

nuevoAuto.moverse(-6);
console.log(nuevoAuto.posicion);


let ironMan = {
    nombre : "Iron Man" ,
    equipo: "Avengers",
    poderes : ["Volar", "Lanzar misiles", "Disparar laser"],
    energia : 100,
    getPoder : function(n) {
        this.energia -= 10;
        return 'Poder elegido de '  + this.nombre + " " + this.poderes[n] + ". Energia restante: " + this.energia;
    }
};

let Hulk = {
    nombre : "Hulk" ,
    equipo: "Avengers",
    poderes : ["Aplastar", "Gritar", "Golpear"],
    energia : 100,
    getPoder : function(n) {
        this.energia -= 10;
        return 'Poder elegido de '  + this.nombre + " " + this.poderes[n] + ". Energia restante: " + this.energia;
    }
};

console.log(ironMan.getPoder(0))
console.log(ironMan.getPoder(1))
console.log(ironMan.getPoder(2))

console.log(Hulk.getPoder(0))
console.log(Hulk.getPoder(1))
console.log(Hulk.getPoder(2))