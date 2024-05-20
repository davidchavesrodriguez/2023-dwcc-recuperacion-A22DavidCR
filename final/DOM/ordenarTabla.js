// Obtener la tabla y las filas
let table = document.getElementById("taboaOrdenar");
let tbody = table.querySelector("tbody");
let rows = Array.from(tbody.querySelectorAll("tr"));
let thNome= document.getElementsByTagName("th")[0];
let thApelido=document.getElementsByTagName("th")[1] ;
let thEdad= document.getElementsByTagName("th")[2];

console.log(thApelido);


// Ordenar las filas por el contenido de la primera celda (columna "Nombre")
thNome.addEventListener("click", ()=>{
    rows.sort((a, b) => {
        let nameA = a.cells[0].textContent.toUpperCase();
        let nameB = b.cells[0].textContent.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
    
    // Eliminar las filas existentes de la tabla
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    
    // Añadir las filas ordenadas de nuevo a la tabla
    rows.forEach(row => {
        tbody.appendChild(row);
    });
})


