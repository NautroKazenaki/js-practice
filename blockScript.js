//===============================
// 1. Скрываем/показываем контент по нажатию
const button = document.querySelector("#button")
const contentDiv = document.querySelector("#content")

button.addEventListener('click', () => {
    let toggler = contentDiv.classList.toggle('content-hidden')
    if (!toggler) {
        button.innerText = "закрыть блок"
    } else {
        button.innerText = "открыть блок"
    }
})

//=================================
// 2. Делаем аккордеон
const blockTitle = document.querySelectorAll("[data-name]")

blockTitle.forEach( (item) => {
    
    item.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('hidden')
    })
})
//=================================
// 3. Делаем табы