/* Dado un array con nomes de variables formados por dúas 
palabras separadas por “_”, fai as operacións necesarias 
para mostrar por consola os nomes das variables en formato camelCase. 
Por exemplo, se o array de entrada é [“first_name”, “last_NAME”], 
deberase mostrar por consola “firtsName” e “lastName”. */

let firstArray = ["first_name", "last_NAME"];
firstArray.forEach((element) => {
  let elements = element.split("_");
  for (let i = 1; i < elements.length; i++) {
    elements[i] =
      elements[i].charAt(0).toUpperCase() + elements[i].slice(1).toLowerCase();
  }
  let camelCase = elements.join("");
  console.log(camelCase);
});
