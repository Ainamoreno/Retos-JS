let numVentas = prompt("Introduzca el número de ventas");
let contador = 0;

for(let i = 1; i <= numVentas; i++) {
   let ventas = parseInt(prompt("Introduzca el precio de las ventas"));
    contador += ventas;  
}
console.log("El precio total de las ventas es " + contador)