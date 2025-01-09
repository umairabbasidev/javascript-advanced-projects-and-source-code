/*
console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");
*/

/*
A pyramid generator is a program where you can set the type of character, the count for the pyramid, and the direction of the pyramid. The program will then generate a pyramid based on those inputs.
*/

// above hard coded pyramid specifications are
// character #
// count 5.
// direction upword
// logic = character increase add number which is 2  in each row, space decrease 1 in each row

const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  const test = "Testing";

  return test;
}

const call = padRow("CamperChan");
console.log(call);

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
