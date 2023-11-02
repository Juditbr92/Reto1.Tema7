// declarar las funciones de la calculadora por separado (suma, resta, producto y division)

function calculadoraSuma(op1, op2, op3){
    console.log(op1 + op2) + op3;
}

function calculadoraResta(op1, op2){
    console.log(op1 - op2);
}

function calculadoraProducto(op1, op2){
    console.log(op1 * op2);
}

function calculadoraDivision(op1, op2){
    console.log(op1 / op2);
}

function calculardoraCuadrado(op1){
    console.log(op1 * op1);
}
// al final del documento escrbir la sentencia:

module.exports = {calculadoraSuma, calculadoraResta, calculadoraProducto, calculadoraDivision, calculardoraCuadrado};




