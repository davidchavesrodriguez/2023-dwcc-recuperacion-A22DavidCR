/* Escribe o código para pintar as celas diagonais dunha 
táboa de vermello. */

let table = document.getElementsByTagName("table")[0];

let rows = table.getElementsByTagName("tr");
let rowArray = Array.from(rows);

rowArray.forEach((row) => {
  let rowIndex = rowArray.indexOf(row);
  let rowTds = row.getElementsByTagName("td");
  let tdArray = Array.from(rowTds);

  tdArray.forEach((td) => {
    let tdIndex = tdArray.indexOf(td);
    if (tdIndex == rowIndex) {
      td.style.backgroundColor = "red";
    }
  });
});
