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
const tabs = document.querySelectorAll("[data-tab]")
const tabsContent = document.querySelectorAll("[data-tab-content]")

tabs.forEach( (item) => {
    
    item.addEventListener('click', function() {
        tabsContent.forEach( (item) =>{
            item.classList.add('hidden')
        })
        document.querySelector('#' + this.dataset.tab).classList.toggle('hidden')
    })
})