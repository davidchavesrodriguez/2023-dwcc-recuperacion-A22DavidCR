/* Escribe o código necesario para procesar unha cadea con 
información de voos como a do exemplo e mostrar a información 
por consola formateada como aparece na imaxe: */
const flightsInfo =
  "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";

let flights = flightsInfo.split("+");

flights.forEach((flight) => {
  let [type, first, second, time] = flight.split(";");
  console.log(
    `${type.replaceAll("_", " ").trim()} ${first
      .substring(0, 3)
      .toLocaleUpperCase()} ${second
      .substring(0, 3)
      .toLocaleUpperCase()} (${time})`
  );
});
