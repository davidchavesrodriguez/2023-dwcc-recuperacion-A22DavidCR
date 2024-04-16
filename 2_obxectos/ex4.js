/* Dada a seguinte constante con información dun voo, 
aplica as transformacións necesarias para que teña o formato mostrado: */

const flightsInfo = "_Delayed_Departure;scq93766109;bio2133758440;11:25";

const [type, scq, bio, time] = flightsInfo.split(";");

const finalType = type.replaceAll("_", " ").trim();
const slicedScq = scq.slice(0, 3).toLocaleUpperCase();
const slicedBio = bio.slice(0, 3).toLocaleUpperCase();
const finalTime = `(${time})`;

const infoVoo = `${finalType} ${slicedScq} ${slicedBio} ${finalTime}`;

console.log(infoVoo); // 'Delayed Departure SCQ BIO (11h25)'
