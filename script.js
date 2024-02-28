/////Crear una función que reciba un número por parámetro e indique en consola si el número es par o impa/////


function esPar(numero) {
  

  if (typeof numero !== "number") {
    console.log("El valor introducido no es un número");
    return;
  }

  if (numero % 2 === 0) {
    console.log(`El número ${numero} es par.`);
  } else {
    console.log(`El número ${numero} es impar.`);
  }
}

// Ejemplo de uso
esPar(10); // Imprime: "El número 10 es par."
esPar(7); // Imprime: "El número 7 es impar."
esPar("hola"); // Imprime: "El valor introducido no es un número"


  

//Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales//

function mayorDeDos(numero1, numero2) {
  

 
  

  if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    console.log("Los valores introducidos no son números");
    return;
  }

  if (numero1 === numero2) {
    console.log("Los números son iguales.");
  } else if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que ${numero2}.`);
  } else {
    console.log(`El número ${numero2} es mayor que ${numero1}.`);
  }
}

//Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5//

function esMultiploDe5(numero) {
  
  if (typeof numero !== "number") {
    console.log("El valor introducido no es un número");
    return;
  }

  if (numero % 5 === 0) {
    console.log(`El número ${numero} es múltiplo de 5.`);
  } else {
    console.log(`El número ${numero} no es múltiplo de 5.`);
  }
}

// Ejemplo de uso
esMultiploDe5(10); // Imprime: "El número 10 es múltiplo de 5."
esMultiploDe5(7); // Imprime: "El número 7 no es múltiplo de 5."
esMultiploDe5("hola"); // Imprime: "El valor introducido no es un número"



///Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número//

function imprimirNumeros(numero) {
  //Parámetros:numero: El número final.
  ""
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

constnumero = parseInt(prompt("Introduce un número: "));




//Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado//

function repetirPalabra(palabra, numero) {
  
 

 
  if (typeof numero !== "number") {
    console.log("El valor introducido para el número no es válido");
    return;
  }

  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
}






//Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array//


function imprimirArray(array) {
  ""
  //Función que imprime los valores de un array.

  //Parámetros:array: El array a imprimir.
  ""
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

constarray = ["Hola", "mundo", "cruel"];



//Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0"//

function imprimirArraySinElemento(array) {
  ""
  //Función que imprime los valores de un array, menos el que se encuentre en la 5ta posición.

  //Parámetros:array: El array a imprimir.
  ""
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

constarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];




// Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro//

function multiplicarArray(array, numero) {
  ""
  //Función que multiplica cada elemento de un array por un número.

  //Parámetros:array: El array a multiplicar.
    //numero: El número por el que se multiplica el array.
  ""
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * numero);
  }
}

const array = [1, 2, 3, 4, 5];
const numero = 3;

multiplicarArray(array, numero);
