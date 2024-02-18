/*
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/


let array = [];
for (let i = 0; i < 5; i++) {
  array.push(Math.floor(Math.random() * 10));
}

let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

let min = Math.min(...array);

let hasThree = array.includes(3);

console.log('Массив:', array);
console.log('Сумма элементов:', sum);
console.log('Минимальное число:', min);
console.log('Есть ли число 3 в массиве?', hasThree ? 'Да' : 'Нет');