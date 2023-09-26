// Базовые арифметические оперторы

const width = 40;
const height = 10;
const space = width * height;
const newWidth = width - 100;
const newWidth2 = width + 100;
const division = newWidth / newWidth2;
const volume = 2 ** 3; // тоже самое, что 2 * 2 * 2
console.log(volume);

// Строки

const city = 'Москва';
const street = 'Новослободская';
console.log(city + ', ' + street); // Операция, которая позволяет присоединить одно значение к другому, называется конкатенацией и в JavaScript выполняется с помощью знака плюс. Склеивать можно обычные строки: paragraph.textContent = 'Вас зовут'+' инструктор Кекс'; console.log (paragraph.textContent); // Выведет: Вас зовут инструктор Кекс. А можно — строки и переменные (или свойства элементов).