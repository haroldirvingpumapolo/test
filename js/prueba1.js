/*const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];*/

/*for (let i = 1;i <= 100; i++ ){
    let resultado = i => {
        if (i%15===0){
           console.log( `${i} : fuzz`);
           return
        }
        if (i%5===0){
            console.log( `${i} : fozz`);
            return
        }
        if (i%3===0){
            console.log( `${i} : fizz`);
            return
        }
        if (i%2===0){
            console.log( `${i} : fezz`);
            return
        }else {console.log( `${i} : fazz`);
            return
        }
    }
    resultado(i)
}*/
let a = 5
let b = 10

if (typeof a === "number" && typeof b === "number"){function menorMayor(a,b){
    if(a>b){
        console.log(`${a} es mayor`);
        console.log(`${b} es menor`);
        return
    }
    if (a===b){
        console.log(`${a} y ${b} son iguales`);
        return
    }
    else{
        console.log(`${b} es mayor`);
        console.log(`${a} es menor`);
        return
    }
}
    menorMayor(a,b);
}else {
    console.log("inserte solo numeros")
}