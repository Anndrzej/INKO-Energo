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