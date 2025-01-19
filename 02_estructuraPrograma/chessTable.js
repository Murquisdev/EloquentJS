// Escribe un programa que cree una cadena que represente un tablero de 8x8, usando caracteres de salto de línea para separar las líneas. En cada posición del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben formar un tablero de ajedrez

// Cuando tengas un programa que genere este patrón, define una variable size = 8 y cambia el programa para que funcione para cualquier size, generando un tablero con el ancho y alto dados.

let size = 8;
for (let countY = 0; countY < size; countY++) {
  let line = "";
  for (let countX = 0; countX < size; countX++) {
    if (countY % 2 === 0) {
      if (countX % 2 === 0) {
        line += " ";
      } else {
        line += "#";
      }
    } else {
      if (countX % 2 === 0) {
        line += "#";
      } else line += " ";
    }
  }
  console.log(line);
}

// Solución Eloquent
// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);
