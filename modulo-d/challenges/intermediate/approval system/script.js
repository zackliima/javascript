const vol = document.querySelector('#attendance')
const result = document.querySelector('#result')

vol.addEventListener('input', () => {
    result.value = vol.value
})

function check() {
    let grade = Number(document.getElementById('grade').value)
    let attendance = Number(document.getElementById('attendance').value)
    const res = document.querySelector('div#res')

    if ((grade < 0 || grade > 10) || (attendance < 0 || attendance > 100)) {
        res.innerHTML = `<strong>Invalid data.</strong>`
    } else {
        if (attendance < 75)
            res.innerHTML = `<strong>Failed due to absences.</strong>`
        else if (grade < 5)
            res.innerHTML = `<strong>Failed due to grades.</strong>`
        else if (grade < 7)
            res.innerHTML = `<strong>Recuperation.</strong>`
        else 
            res.innerHTML = `<strong>Approved!</strong>`
    }
}