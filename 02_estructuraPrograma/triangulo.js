/*
Escribe un bucle que realice siete llamadas a console.log para mostrar el siguiente triángulo:

#
##
###
####
#####
######
#######
*/

let char = "",
  count = 0;
while (count < 7) {
  char += "#";
  console.log(char);
  count++;
}

// Eloquent solution
// for (let line = "#"; line.length < 8; line += "#") console.log(line);
