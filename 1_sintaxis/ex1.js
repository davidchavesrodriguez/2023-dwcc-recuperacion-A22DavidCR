/* Crea unha variable que almacene un día da semana de luns a domingo.
En función do valor da variable mostra unha mensaxe indicando se o día
é laborable ou non. */

let week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let day = 55;

if (day >= 0 && day < 5) {
  console.log(`${week[day]} is a working day`);
} else if (day === 5 || day === 6) {
  console.log(`${week[day]} is NOT a working day`);
} else {
  console.log("There is not such day!");
}
