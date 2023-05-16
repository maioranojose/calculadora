const process = require('process');
const calculadora = require('./calculadora');

const operaciones =['sumar','restar','multiplicar','dividir'];
const operacion = process.argv[2];
const n1 =+process.argv[3];
const n2 =+process.argv[4];
let resultado = 0;

if(operaciones.includes(operacion)){
    if(operacion === "sumar"){
        resultado=calculadora.sumar(n1,n2);
    }else if(operacion === "restar"){
        resultado=calculadora.restar(n1,n2);
    }else if(operacion === "multiplicar"){
        resultado=calculadora.multiplicar(n1,n2);
    }else if(operacion === "dividir"){
        resultado=calculadora.dividir(n1,n2);
    }
    console.log(resultado);
}
else{
    console.log("ERROR: La operación no es válida");
}
