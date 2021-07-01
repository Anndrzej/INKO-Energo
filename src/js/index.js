// mobile contact icons
const icons = document.querySelectorAll('#contacts')
const btnContacts = document.querySelector('.burger__contacts')

btnContacts.addEventListener('click', () => {
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.toggle('active__contacts')

    }
})
//  work section rotate effect
const workItems = document.querySelectorAll('.work__item')


for (let i = 0; i < workItems.length; i++) {
    workItems[i].addEventListener('click', () => {
        workItems[i].classList.toggle('work__active')
    })
}

// burger menu

const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active')
    menu.classList.toggle('menu__active')
})

