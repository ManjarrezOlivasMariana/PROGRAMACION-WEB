type operaciones = ['suma','resta','multiplicacion','division'];
type Resultados = number | string;
const calculadora = (a:number, b:number, operacion:'suma'|'resta'|'multiplicacion'|'division') => {
    
    if(operacion =='suma'){
        return a + b;
    }
    if(operacion =='resta'){
        return a - b;
    }
    if(operacion =='multiplicacion'){
        return a * b;
    }
    if(operacion =='division'){
        if(b === 0){
            throw new Error("no se puede devidir entre cero");
            //return 'Error: Division por cero';
        }
        return a / b;
    }
    throw new Error("operacion no válida")
   // return 'Operacion no válida';
}

console.log(calculadora(1,3,'suma')); 
console.log(calculadora(5,2,'resta'));
console.log(calculadora(4,6,'multiplicacion'));
console.log(calculadora(8,2,'division'));
console.log(calculadora(8,0,'Error'));