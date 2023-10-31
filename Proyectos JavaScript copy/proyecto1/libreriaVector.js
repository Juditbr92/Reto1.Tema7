// crearVector(n, m):number[]. Crea y devuelve un vector de n números aleatorios que van desde 0 hasta m.

function crearVector(n,m) {
    const vector = [];
    for(let i = 0; i < n; i ++){
        const randomNumber = Math.floor(Math.random() * (m + 1));
        vector.push(randomNumber);
    }
return vector;
}

console.log(crearVector(6,5));

//Suma dos vectores v1 y v2 si y solo si tienen el mismo numero de elementos y devuelve el vector resultado de dicha suma.

let vector1 = crearVector(3,6);
let vector2 = crearVector(3,4);

function sumaVectores(v1, v2){
    if(v1.length === v2.length){
        const v3 = [];
        for(let i = 0; i < v1.length; i ++){
        v3.push(v1[i] + v2[i]);
        }
        console.log(v3);
    }
    else{console.log("Los vectores no tienen la misma longitud")}
}

sumaVectores(vector1, vector2);

// productoNumeroVector(n, v): number[]. Multiplica el vector v por el numero y devuelve el vector resultado de dicho producto

function productoNumeroVector(n, v){
    const v2 = [];
    for(let i = 0; i < v.length; i++){
        v2.push(n * v[[i]]);
    }
    console.log(v2);
}

productoNumeroVector(2, vector1);

//restaVector(v1, v2): number[]. Resta dos vectores v1 y v2 si y solo si tienen el mismo numero de elementos y devuelve el vector resultado de dicha resta.

function restaVector(v1, v2){
    if(v1.length === v2.length){
        const v3 = [];
        for(i = 0; i < v1.length; i++){
        v3.push(v1[i] - v2[i])
        }
        console.log(v3);
    }
}

let v1 = [0, 23, 25, 36];
let v2 = [12, 25, 1, 20];

restaVector(v1, v2);

//productoVector(v1, v2): Multiplica dos vectores v1 y v2 si y solo si tienen el mismo número de elementos y devuelve el vector resultado de dicho producto.

function productoVector(v1, v2){
    if(v1.length === v2.length){
        const v3 = [];
        for(i = 0; i < v1.length; i++){
        v3.push(v1[i] * v2[i])
        }
    console.log(v3);
    }
}

productoVector(v1,v2);

module.exports = {crearVector, productoNumeroVector, sumaVectores, restaVector, productoVector};


