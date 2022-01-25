// let names = [
//     "Угор",
//     "аывлдоа",
//     'jfdslfkj'
// ]

// //==================================

// document.querySelector('h2').classList.add('red')
// const titleH1 = document.querySelector('h1')
// titleH1.classList.add('green')
// //===================================

// let doTextPink = () =>{
//     const lorems = document.querySelectorAll('p')
//     for (let item of lorems) {
//         item.classList.add('meme')
//     }
// }
// const btn = document.querySelector('button')
// // btn.onclick = () => { doTextPink() }
// //===================================
// let changePColor = () =>{
//     const lorems = document.querySelectorAll('p') 
//     lorems.forEach(function(item) {
//         item.classList.add('green')
//     })
// }
// changePColor()
// //===================================
// let img = document.querySelector('#logo')
// img.setAttribute('alt', 'нарута')
// console.log(img)
// //===================================
// let button = document.querySelector('#btn')
// button.setAttribute('type', 'checkbox')

// btn.addEventListener('click', doTextPink)
// //===================================
// const textField = document.querySelector('#input-text')
// const displayedTextBlock = document.querySelector('#text-block')
// textField.addEventListener('input', function() {
//     displayedTextBlock.innerText = textField.value
// })
// //===================================
// const list = document.querySelector('#list')
// list.addEventListener('click',  function (event) {
//     console.log(event.target)
// })
// //===================================
// const container = document.querySelector('#elementsContainer') 
// const newHeader = document.createElement('h1')
// const newHeader2 = '<h1> Eze odin zagolovok </h1>'
// newHeader.innerText = "просто текст"
// container.append(newHeader)
// container.insertAdjacentHTML('beforeend', newHeader2)
//===================================
// const toDoInput = document.querySelector('#todo-input')
// const toDoForm = document.querySelector('#todo-form')
// const toDoList = document.querySelector('#todo-list')

// toDoForm.addEventListener('submit', function(event) {
//     //отменяем стандартное поведение сабмита
//     event.preventDefault()
//     //создаем новую таску
//     let inputValue = toDoInput.value
//     let newToDoTask = document.createElement('li')
//     newToDoTask.innerText = inputValue
//     // создает кнопку, которая будет делитать таску
//     const deleteBtn = document.createElement('button')
//     deleteBtn.setAttribute('role', 'button')
//     deleteBtn.innerText = 'Удалить'
//     deleteBtn.style['margin-left'] = '15px'
//     newToDoTask.append(deleteBtn)
//     deleteBtn.addEventListener('click', function() {
//         this.closest('li').remove()
//     })
//     //добавляем таску на страницу
//     toDoList.append(newToDoTask)
//     //зануляем инпут
//     toDoInput.value = ''
//     //возвращаем фокус на импут
//     toDoInput.focus()
// })
//===================================
// setInterval(() => {
//     console.log('yo')
// }, 1000)

// setTimeout(() => {
//     console.log('working')
// }, 2000)
//===================================
// const intrevalId = setInterval( () => {
//     console.log('working')
// }, 1000)

// setTimeout( () => {
//     clearInterval(intrevalId)
// }, 10000)
//===================================
// //находим элементы по айди
// const startBtn = document.querySelector('#start')
// const stopBtn = document.querySelector('#stop')
// const resetBtn = document.querySelector('#reset')
// const counter = document.querySelector('#counter')
// // создаем глобальные переменные
// let timer = 0;
// let timerId;
// //кнопка старт
// startBtn.addEventListener('click', function() {
//   timerId = setInterval(function() {
//      timer++;
//      counter.innerText = timer
//  }, 1000)
// })
// //кнопка стоп
// stopBtn.addEventListener('click', function() {
//     clearInterval(timerId)
// }, 0.1)
// //кнопка сброс
// resetBtn.addEventListener('click', function() {
//     timer = 0
//     counter.innerText = timer
//     clearInterval(timerId)
// })
//==================================
// setTimeout( function() {
//     console.log('step-1')

//     setTimeout( function() {
//         console.log('step-2')

//         setTimeout( function() {
//             console.log('step-3')
//         }, 1000)
//     }, 2000)
// }, 3000)
//=================================
// function checkRooms(succes, failed) {
//     setTimeout(function() {
//         console.log('проверяю свободные места')
//         const available = true

//         if (available) {
//             let message = "номера есть"
//             succes(message)
//         } else {
//             let message = 'мест нет'
//             failed(message)
//         }
//     }, 1000)
    
// }
// function cancel(message) {
//     console.log(message)
// }
// function aprove(message) {
//     console.log(message)
// }
// function checkTickets(message, succes, failed) {
//     setTimeout( function() {
//         console.log(message)
//         console.log('проверяю билеты')
//         const availableTickets = true

//         if (availableTickets) {
//             let message = 'билеты есть'
//             succes(message)
//         } else {
//             let message = 'билетов нет'
//             failed(message)
//         }
//     }, 500)
// }
// checkRooms(function(messageFromCheckRooms){
//     checkTickets(messageFromCheckRooms, aprove, cancel)
// }, cancel)
//================================
// //Промисы 
// //создаем промисс
// const myPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         const response = true;
//         if (response) {
//             let message = "SUCCESS"
//             resolve(message)
//         } else {
//             let message = "FAILED"
//             reject(message)
//         }
//     }, 1000)
// })
// //запускаем цепочку промисов
// myPromise.then( (data) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             console.log('then 1')
//             const responce = true
//             if (responce) {
//                 resolve('data from then 1')
//             } else {
//                 reject('rejected in then 1')
//             }
//             console.log(data)
//         }, 1500)
//     })
// }).then( (data) => {
//     setTimeout ( () =>{
//         console.log('then 2')
//         console.log(data)
//     }, 500)
// }).catch( (data) =>{
//     console.log(data)
// })
//=============================
const  checkRooms = new Promise( (resolve, reject) => {
    
    setTimeout( () => {
        console.log("проверяю, есть ли свободные места")
        const IsRoomsFree = true
        if (IsRoomsFree) {
            resolve('свободные места есть')
        } else {
            reject('ой-ой, похоже свободных мест нет')
        }
    }, 1500)
}).then( (data) => {
    return new Promise( (resolve, reject) => {
        setTimeout ( () => {
            console.log("проверяю, доступны ли билеты для покупки")
            const isTicketAvailable = true
            if (isTicketAvailable) {
                console.log(data)
               resolve("билеты в наличии")
               console.log(data)
            } else {
                reject('билетов нет в наличии')
            }
        }, 1000)
    })
   
}).catch( (data)=> {
    console.log(data)
})

