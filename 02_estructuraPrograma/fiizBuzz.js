// Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones. Para los números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no por 3), imprime "Buzz" en su lugar.

// Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz" para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o "Buzz" para los números que son divisibles solo por uno de esos).

for (let count = 1; count <= 100; count++) {
  if ((count % 3 === 0) & (count % 5 === 0)) {
    console.log("FizzBuzz");
  } else if (count % 5 === 0) {
    console.log("Buzz");
  } else if (count % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(count);
  }
}

// Solución Eloquent
// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }
