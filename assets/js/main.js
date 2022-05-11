// Вывод чего то в консоль
// console.log("Hello World");
// console.info("Hello World!2")
// // Окно с сообщением
// // alert("Hello World!");
// // Ошибки в консоле
// console.error("Ошибка!");
// // Предупреждение в консоле
// console.warn("Предупреждение");




// Переменные
// const num1 = 2;
// let num2 = 10;

// const sum = num1 + num2;

// const text = "some text";
// console.log(`${text} ${sum}`);
// const button = document.querySelector('#button'); // Поиск элемента
// const button = document.getElementById('button'); // Поиск по id
// const buttons = document.querySelectorAll('button');
// console.log(buttons);



// for(const button of buttons){
//     button.addEventListener('click', function() {
//         button.classList.toggle("qwe");
//     });
// }


// Слайдер
let SlideNum = 0;

const slideItem = document.getElementsByClassName('item');
console.log(slideItem);

showSlide(SlideNum);

function prevSlide(){
    SlideNum -= 1;
    showSlide(SlideNum,SlideNum+1);
}

function nextSlide(){
    SlideNum += 1;
    showSlide(SlideNum, SlideNum-1);
}



function showSlide(n,prev){
    console.log(n);
    console.log(slideItem[n]);
    slideItem[n].classList.add("focus");
    slideItem[prev].classList.remove("focus");

    if(n>slideItem.length){
        SlideNum = 0;
        console.log(SlideNum);
    }
    if(n<0){
        SlideNum = slideItem.length;
        console.log(SlideNum);
    }
}
