/* Crea unha función á que se lle pase como parámetro o 
número de segundos e devolva un string indicando a súa 
equivalencia en horas e minutos. */

function calcTime(seconds) {
  const hours = parseInt(seconds / 3600);
  const minutes = seconds % 3600;

  console.log(`That is ${hours} hours and ${minutes} minutes`);
}

calcTime(435356547);
