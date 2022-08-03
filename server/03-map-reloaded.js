const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta);

// const rta2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("rta2", rta2);
// console.log("original", orders);

// .map() puede cambiar el objeto original, porque en un princpio si se trabaja con objetos hace una referencia en memoria del mismo
const rta3 = orders.map((item) => {
    return {
        ...item,// Para evitar cambiar el objeto original se usa el spread operator(...) 
        tax: 0.19,
    };
});
console.log("rta3", rta3);
console.log("original", orders);


function solution(array) {
    // Tu código aquí 👈 
    return array.map(item =>
    ({
        ...item,
        taxes: parseInt(item.price * 0.19),
    }))
}; 

let salida=solution([
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    },
]);
console.log(salida);
