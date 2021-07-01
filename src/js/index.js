<<<<<<< HEAD
// mobile contact icons
const icons = document.querySelectorAll('#contacts');
const btnContacts = document.querySelector('.burger__contacts');

btnContacts.addEventListener('click', () => {
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.toggle('active__contacts');
  }
});
//  work section rotate effect
const workItems = document.querySelectorAll('.work__item');

for (let i = 0; i < workItems.length; i++) {
  workItems[i].addEventListener('click', () => {
    workItems[i].classList.toggle('work__active');
  });
}

// burger menu

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger__active');
  menu.classList.toggle('menu__active');
});
=======
const test = document.querySelectorAll('#contacts')
const test2 = document.querySelector('.burger__contacts')

console.log(test)
console.log(test2)

// for (let i = 0; i < test.length; i++) {
//     console.log[i]
//     test2[i].addEventListener('click', () => {
//         console.log(test[i])
//         test2[i].classList.toggle('active__contacts')
//     })
// }

test2.addEventListener('click', () => {
    for (let i = 0; i < test.length; i++) {
        test[i].classList.toggle('active__contacts')

    }
})
>>>>>>> 36cca420ad640926d463dd4cee8080c04aedc9a4
