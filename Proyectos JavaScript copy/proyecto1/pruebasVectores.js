// Crea un nuevo fichero que llame a las funciones definidas en el fichero libreríaVector.js y prueba todas sus funciones.

let myLib = require("./libreriaVector");

let n = 8;
let m = 5;

const v1 = [2, 6, 5, 8];
const v2 = [1, 3, 10, 8];

myLib.crearVector(n, m);

myLib.sumaVectores(v1, v2);

myLib.productoNumeroVector(n, v1);

myLib.restaVector(v1, v2);

myLib.productoVector(v1, v2);


// Reto 4

//Redefine la función sumaVector para implementarla utilizando el método .forEach suponiendo que tanto v1 como v2 tienen el mismo número de elementos

let vec1 = [2, 6, 3, 8];
let vec2 = [4, 10, 5, 4];

let sumaVec = [];
vec1.forEach(function(vec1, i) {
    if(i < vec2.length){
        sumaVec.push(vec1 + vec2[i])
    }
});

console.log(sumaVec);

//Redefine la función sumaVector implementándola utilizando el método .map suponiendo que tanto v1 como v2 tienen el mismo número de elementos.

const sumaVecMap = vec1.map((element, i) =>{
    return element + vec2[i];
})

console.log(sumaVecMap);

//Implementa la función filtrarPares(v) que devuelva el vector resultante de eliminar los número impares almacenados en v, utilizando el método .filter.
function filtrarPares(v) { 
    return v.filter((element) => element % 2 === 0);
}

console.log(filtrarPares(vec2));

//Implementa la función sumatorio(v) que devuelve la suma de los elementos del vector v usando el método .reduce

let sumatorio = vec1.reduce(function(accumulator, value){
    return accumulator + value;
})

console.log(sumatorio);