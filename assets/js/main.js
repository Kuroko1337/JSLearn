// Вывод чего то в консоль
// console.log("Hello World");
// console.info("Hello World!2")
// // Окно с сообщением
// // alert("Hello World!");
// // Ошибки в консоле
// console.error("Ошибка!");
// // Предупреждение в консоле
// console.warn("Предупреждение");

privet();


// Переменные
// const num1 = 2;
// let num2 = 10;

// const sum = num1 + num2;

// const text = "some text";
// console.log(`${text} ${sum}`);
// const button = document.querySelector('#button'); // Поиск элемента
const button = document.getElementById('button'); // Поиск по id
const buttons = document.querySelectorAll('button');



for(const button of buttons){
    button.addEventListener('click', function() {
        alert("Клик");
    });
}

console.log(buttons);

const privet = () => {
    alert('Привет мир!');
}