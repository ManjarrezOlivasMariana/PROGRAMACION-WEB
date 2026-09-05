// const operaciones= ['suma','resta','multiplicacion','division'];
type Operaciones = 'suma'|'resta'|'multiplicacion'|'division';
type Resultados = number | string;
const calculadora = (a:number,b:number,operacion: Operaciones):number =>{
    // if(!operaciones.includes(operacion)){
    //     return "Operación no válida";
    // }
    if(operacion == 'suma'){
        return a+b;
    }
    if(operacion == 'resta'){
        return a-b;
    }
    if(operacion == 'multiplicacion'){
        return a*b;
    }
    if(operacion == 'division'){
        if(b == 0){
            throw new Error("No se puede dividir entre cero");
            // return "No se puede dividir entre cero";
        }
        return a/b;
    }
    // return "Operación no válida";
    throw new Error("Operación no válida");
}

console.log(calculadora(1,3,'suma'));
console.log(calculadora(1,3,'resta'));
console.log(calculadora(1,3,'multiplicacion'));
console.log(calculadora(1,3,'division'));
console.log(calculadora(1,0,'division'));
// console.log(calculadora(1,3,'sumaste'));