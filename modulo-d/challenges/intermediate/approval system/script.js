const vol = document.querySelector('#attendance')
const result = document.querySelector('#result')

vol.addEventListener('input', () => {
    result.value = vol.value
})