function check() {
    var age = Number(document.getElementById('num').value)
    var res = document.querySelector('div#res')

    if (age < 0 || age > 120) {
        window.alert('Invalid age, please try again!')
    } else if (age < 18) {
        res.innerHTML = `You are a minor.`
    } else {
        res.innerHTML = `You are of legal age.`
    }
}