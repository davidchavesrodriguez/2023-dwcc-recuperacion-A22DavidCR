// Descarga o código fonte 03-propiedadesNodo02.html e mostra
// por consola:

// ● O número de ligazóns da páxina.
let allLinks = document.querySelectorAll("a");
console.log(allLinks.length);

// ● A dirección da penúltima ligazón.
console.log(allLinks[allLinks.length - 1].getAttribute("href"));

// ● O número de ligazóns que apuntan a http://proba
let linksProba = document.querySelectorAll("a[href='http://proba']");
console.log(linksProba.length);

// ● O número de ligazóns do terceiro parágrafo.
console.log(document.querySelectorAll("p")[2].querySelectorAll("a").length);

// ● Fai que as ligazóns que apuntan a http://proba teñan o texto de cor laranxa.
linksProba.forEach((element) => {
  element.style.color = "orange";
});
