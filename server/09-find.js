const numbers = [1, 30, 41, 29, 50, 60]

let respuesta = undefined
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    if (element >= 40) {
        respuesta = element
        break
    }
}

console.log(respuesta) // 41


const rta = numbers.find(item => item >= 40)
const rta2 = numbers.findIndex(item => item >= 40)

console.log(rta) // 41
console.log(rta2) // 2

const letters = ["a", "b", "c"]

const rta3 = letters.find(item => item >= 40)
const rta4 = letters.findIndex(item => item >= 40)

console.log(rta3) // undefined
console.log(rta4) // -1


const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];