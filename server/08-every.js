const numbers = [1, 30, 41, 29, 10, 13]

let respuesta = true
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    if (element >= 40) {
        respuesta = false
        break
    }
}

console.log(respuesta) // false


const numbers2 = [1, 30, 39, 29, 10, 13]
const rta = numbers2.every(item => item < 40)
console.log(rta) // true

//Ejercicio

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 13,
    },
];
const condition=team.every(member=>member.age<15);
const rta2=condition ? "Pueden jugar" : "No pueden Jugar, uno de sus miembros es mayor de 15";
console.log(rta2);
