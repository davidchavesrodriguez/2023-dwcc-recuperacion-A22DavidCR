/* Dada a seguinte constante con información dun voo, 
aplica as transformacións necesarias para que teña o formato mostrado: */

const flightsInfo = "_Delayed_Departure;scq93766109;bio2133758440;11:25";

let infoVoo = flightsInfo.replaceAll("_", " ", ";", " ");

console.log(infoVoo); // 'Delayed Departure SCQ BIO (11h25)'
