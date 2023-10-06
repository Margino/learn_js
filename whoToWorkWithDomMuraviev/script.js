// Создать div
    const div = document.createElement('div')
// Добавить к нему класс wrapper
    div.classList.add('wrapper')
// Поместить его внутрь тэга body
    const body = document.querySelector('body')
    body.appendChild(div)
// Создать заголовок H1 "DOM (Document Object Model)"
    const header = document.createElement('h1')
    header.textContent = "DOM (Document Object Model)"
// Добавить H1 перед DIV с классом wrapper
    // body.insertBefore(header,div)
    div.insertAdjacentElement('beforebegin', header)
// Создать список <ul></ul>
    // const ul = document.createElement('ul')
    // div.insertAdjacentElement("afterbegin", ul)
    // for (let i = 3; i > 0; i--) {
    //     let el = document.createElement('li')
    //     el.innerText = `элемент ${i}`
    //     ul.insertAdjacentElement('afterbegin', el)
    // }
// Добавить в него 3 элемента с текстом "один, два, три"
    const list = `
        <ul>
            <li>один</li>
            <li>два</li>
            <li>три</li>
        </ul>
    `
// Поместить список внутрь элемента с классом wrapper
div.innerHTML = list
// =================================================
// Создать изображение
    const img = document.createElement('img')
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
    img.src = 'https://i.pravatar.cc/240'
// 2. Добавить атрибут width со значением 240
    img.width = 240
// 3. Добавить класс super
    img.classList.add('super')
// 4. Добавить свойство alt со значением "Super Man"
    img.alt = 'Super Man'
// Поместить изображение внутрь элемента с классом wrapper
    div.insertAdjacentElement('beforeend',img)
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
    const elemHtml = `
        <div class="pDiv">
            <p>Параграф 1</p>
            <p>Параграф 2</p>
        </div>
    `
// Поместить этот DIV до элемента <ul></ul>
    const ulList = div.querySelector('ul')
    ulList.insertAdjacentHTML('beforebegin', elemHtml)
// Добавить для 2-го параграфа класс text
    const pDiv = document.querySelector('.pDiv')
    pDiv.children[1].classList.add('text')
    // div.querySelector('p:nth-child(2)').classList.add('text')
// Удалить 1-й параграф
    pDiv.firstElementChild.remove()
    // div.querySelector('.pDiv > :nth-child(1)').remove()

// Создать функцию generateAutoCard, 
// которая принимает 3 аргумента: brand, color, year
const generateAutoCard = (brand, color, year) => {
    return `
        <div class="autoCard">
            <h2>${brand.toUpperCase()} ${year}</h2>
            <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${new Date().getFullYear() - year} лет.</p>
            <p>Цвет: ${color}</p>
            <button type="button" class="btn">Удалить</button>
        </div>
    `
}
// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом autos
const carsDiv = document.createElement('div')
carsDiv.classList.add('autos')

// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'}
]

const carsHTML = carsList.map((car) => {
    return generateAutoCard(car.brand, car.color, car.year)
}).join('')

// Поместить эти 3 карточки внутрь DIV с классом autos
carsDiv.innerHTML = carsHTML
// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
div.insertAdjacentElement('beforebegin', carsDiv)
// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
const buttons = carsDiv.querySelectorAll('.btn')
// 2. Создать функцию удаления
// const removeAuto = (btn) => {
//     btn.parentNode.remove()
// }
const handleClick = (e) => {
    const currentButton = e.currentTarget
    currentButton.closest('.autoCard').remove()
}
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
// buttons.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         removeAuto(btn)  
//     })
// })
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleClick(e) 
    })
})