const form = document.querySelector('.js-form')
const hide = document.querySelector('.js-hide')

hide.addEventListener('click' , () => {
    form.classList.add('hidden')
})