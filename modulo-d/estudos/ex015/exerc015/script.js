function check() {
    var data = new Date()
    var current_year = data.getFullYear()
    var year = document.getElementById('txtyear')
    var res = document.querySelector('div#res')

    if (year.value.length == 0 || year.value > current_year) {
        window.alert(`[ERROR] Chek the details and try again.`)
    } else {
        var gender_check = document.getElementsByName('radsex')
        var gender = ''
        var age = current_year - year.value
        var img = document.createElement('img')

        img.setAttribute('id', 'photo')

        if (gender_check[0].checked) {
            gender = 'Male'
            if (age >= 0 && age < 12) {
                img.setAttribute('src', 'images/child-boy.webp')
            } else if (age >= 12 && age < 20) {
                img.setAttribute('src', 'images/young-boy.webp')
            } else if (age >= 20 && age < 60) {
                img.setAttribute('src', 'images/adult-men.webp')
            } else {
                img.setAttribute('src', 'images/elderly-men.webp')
            }
        } else if (gender_check[1].checked) {
            gender = 'Female'
            if (age >= 0 && age < 12) {
                img.setAttribute('src', 'images/child-girl.webp')
            } else if (age >= 12 && age < 20) {
                img.setAttribute('src', 'images/young-girl.webp')
            } else if (age >= 20 && age < 60) {
                img.setAttribute('src', 'images/adult-women.webp')
            } else {
                img.setAttribute('src', 'images/elderly-women.webp')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `We detected a ${age} year-old ${gender}`
        res.appendChild(img)
    }
}