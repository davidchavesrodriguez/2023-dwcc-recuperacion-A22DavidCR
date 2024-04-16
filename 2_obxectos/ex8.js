/* Crea unha función que dado o radio dun círculo, 
devolva a súa área. E fai outra función que reciba o radio 
e devolva o perímetro do círculo. Mostra por consola o resultado 
das funcións usando dúas cifras decimais. */

function calcCircle(radius) {
  const perimeter = 2 * Math.PI * radius;
  const area = Math.PI * Math.pow(radius, 2);

  console.log(
    `Perimeter is ${perimeter.toFixed(2)} and area is ${area.toFixed(2)}`
  );
}

calcCircle(5);
