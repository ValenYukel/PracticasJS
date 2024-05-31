let var1 = "Ingresa un numero: ";
let pregunta = prompt(var1);
console.log(pregunta);

let var2 = "Ingresa otro numero: ";
let pregun = prompt(var2);
console.log(pregun);

function multiplicar(num1 , num2){
    return("El resultado de multiplicar " + num1 + " y " + num2 + " es " + (num1*num2));
    }
console.log(multiplicar(pregunta, pregun));

