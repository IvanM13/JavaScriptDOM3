"use strict"

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", function () {
    console.log('все теги прогрузились');
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener("DOMContentLoaded", () => {
    console.log('страница загрузилась');
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование

document.body.addEventListener("click", function (e) {
    const targ = e.target;

    const superEl = targ.classList.contains("super_element");

    let answer = "отсутствует";
    if (superEl) {
        answer = "присутсвует";
    }
    console.log(
        `Класс "super_element" ${answer} в элементе "${targ.tagName.toLowerCase()}".`
    );
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea.

const textarea = document.querySelector("textarea");

document.addEventListener("mouseover", function(){
    console.log("Вы навели на textarea.");
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст,
// который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ul = document.querySelector('ul');

ul.addEventListener("click", function(e){
    const targ = e.target;

    if(targ.tagName === "BUTTON"){
        console.log(targ.innerHTML);
    }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? 
// Ответ необходимо написать здесь же, под этим комментарием, своими словами.

console.log(`элемент ul обрабатывается раньше, чем элемент body, потому что браузер начинает обрабатывать страницу сверху вниз, начиная с тега html и заканчивая тегом body. 
Закрывающий тэг </ul> находится выше в коде, чем тэг </body>, поэтому он обрабатывается раньше.`);

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liEl = document.querySelectorAll('li');

liEl.forEach((li, elem) => {
    if (elem % 2) {
        li.style.backgroundColor = "blue";
    }
});

