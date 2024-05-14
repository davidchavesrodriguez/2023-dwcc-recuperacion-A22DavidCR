/* Crea unha función chamada calcularPrezo que reciba un 
array de obxectos, calcule o precio total e o devolva.

    Os obxectos teñen o seguinte formato: 
        {"product": "Milk",  "quantity": 1,  "price": 1.50}
    */

function calcularPrezo(array) {
  let total = 0;
  array.forEach((object) => {
    let totalObjeto = object.quantity * object.price;
    total += totalObjeto;
  });
  console.log("Total= " + total.toFixed(1));
}

calcularPrezo([{ product: "Milk", quantity: 1, price: 1.5 }]); // 1.5
calcularPrezo([
  { product: "Milk", quantity: 1, price: 1.5 },
  { product: "Cereals", quantity: 1, price: 2.5 },
]); // 4
calcularPrezo([{ product: "Milk", quantity: 3, price: 1.5 }]); // 4.5
calcularPrezo([
  { product: "Milk", quantity: 1, price: 1.5 },
  { product: "Eggs", quantity: 12, price: 0.1 },
  { product: "Bread", quantity: 2, price: 1.6 },
  { product: "Cheese", quantity: 1, price: 4.5 },
]); // 10.4
calcularPrezo([
  { product: "Chocolate", quantity: 1, price: 0.1 },
  { product: "Lollipop", quantity: 1, price: 0.2 },
]); // 0.3
