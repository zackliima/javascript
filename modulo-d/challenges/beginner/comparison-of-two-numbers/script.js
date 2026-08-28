function check() {
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var res = document.querySelector('div#res')

    if (num1 === num2) {
        res.innerHTML = `Both numbers are equal.`
    } else if (num1 > num2) {
        res.innerHTML = `The first number is greater.`
    } else {
        res.innerHTML = `The second number is greater.`
    }
}