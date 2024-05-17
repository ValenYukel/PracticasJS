
//* PRACTICA FUNCIONES *//
function hola(){
    let saludo = "Hello World!";
    return saludo;
    }
    console.log(hola());
    
    
    function rectangulo (base , altura) {
          let area_rec = (base * altura);
          return area_rec;
        }
    console.log(rectangulo(10, 3));
    
    
    function triangulo (base , altura) {
        return ((base * altura)/2);
      }
    console.log(triangulo(10, 3));
    
    
    function largoDelArray(lista) {
        return lista.length;
    }
    console.log(largoDelArray([1, 2]));
    
    
    function cantidadDeLetras (palabra) {
        return palabra.length;
    }
    console.log(cantidadDeLetras("Hola"));
    
    
    function dolarHoy (precio_pesos) {
        return (precio_pesos * 1050);
    }
    console.log(dolarHoy(2));
    
    
    function precioFinal(precio) {
    return (precio + ((precio * 21)/100));
    }
    console.log(precioFinal(100));
    
    
    function mitad(numero) {
        return (numero/2);
    }
    console.log(mitad(8));
    
    
    
    
    function anterior(numero){
        return (numero - 1);
    }
    console.log(anterior(9));
    
    function triple(numero){
        return (numero * 3);
    }
    console.log(triple(9));
    
    function anteriorDelTriple(numero){
        return ((numero * 3)-1);
    }
    console.log(anteriorDelTriple(9));
    
    //* FIN *//