// const myEvent = new Event('myEvent')
// // cоздали свое новое событие при помощи конструктора Event()

// document.addEventListener('myEvent', () => {
//     console.log('Событие myEvent произошло')
// })
// // обработка нашего события

// document.dispatchEvent(myEvent)
// // генерация события 






// Напишите код, который будет реагировать на клик по кнопке
// и выводить в консоль сообщение "Кнопка была нажата!".

// const myButton = document.getElementById('myClickButton')
// myButton.addEventListener('click', () => {
//     alert('Кнопка была нажата')
// })



// Создайте HTML-страницу с кнопкой и элементом div. Напишите код, который будет реагировать на двойной клик по кнопке
// и изменять цвет фона элемента div на зеленый.

// const myButton = document.getElementById('myClickButton')
// myButton.addEventListener('dblclick', () => {
//    const bgcColor = myClickButton.style.backgroundColor

//    if(bgcColor == 'white') {
//     myButton.style.backgroundColor = 'green'
//    } else if(bgcColor == 'green') {
//     myButton.style.backgroundColor = 'red'
//    } else {
//     myButton.style.backgroundColor = 'white'
//    }
// })



// Напишите код, который будет выводить сообщение в консоль 
// при двойном клике по любому элементу страницы.

// const elementClick = document.querySelectorAll('.element')
// for(const element of elementClick) {
//     element.addEventListener('dblclick', () => {
//         console.log('Кнопка была нажата 2 раза')
//     })
// }





// Создайте таблицу на HTML-странице и напишите код, 
// который будет реагировать на двойной клик по ячейке таблицы и заменять текст в ячейке на "Double clicked!"

// let table = document.getElementById('message')
// table.addEventListener('dblclick', (e) => {
//     e.target.textContent = 'Привет'
// })




// Создайте таблицу на HTML и напишите код, который будет реагировать по клику ячейки таблицы
// и выводить текст из таблицы в элемент на странице.

// let table = document.getElementById('table'),
//   out = document.getElementById('conclusion');

// table.addEventListener('click', function(e){
//   if( e.target.tagName !== 'TD') return; 
//   out.innerHTML = e.target.innerHTML;
// });




// Создайте список изображений на HTML-странице и напишите код, 
// который будет реагировать на двойной клик по каждому изображению и выводить его альтернативный текст в консоль.

// let image = document.getElementById('list')
//     image.addEventListener('dblclick', () => {
//     console.log('Кнопка была нажата 2 раза на картинку')
// })




// Напишите код, который будет реагировать на двойной клик по заголовку страницы и изменять его текст на "Double clicked!".

// let title = document.getElementById('title')
// title.addEventListener('dblclick', () => {
//     title.textContent = 'Double clicked!'
// })



// Напишите код который будет выводить нажатие любой кнопки в консоль.

// document.addEventListener('keydown', (event) => {
//     console.log('Вы нажали на ' + event.key )
// })



// Hапишите код который будет запрашивать строку у пользователя и выводить введенную строку в консоль.


// document.addEventListener('keydown', (event) => {
//     let msg = prompt('Введите строку')
//     console.log('Вывод строки: ' + msg)
// })


// Напишите код который будет выводить отпускание любой кнопки в консоль

// document.addEventListener('keyup', (event) => {
//     console.log('Вы нажали на ' + event.key + ' и отпустили')
// })