/* Dada a seguinte constante, fai as operacións necesarias para que 
o primeiro carácter estea en maiúscula: */

const cadea = "desenvolvemento web";
let novaCadea = cadea[0].toUpperCase() + cadea.slice(1);
console.log(novaCadea); // 'Desenvolvemento web'
