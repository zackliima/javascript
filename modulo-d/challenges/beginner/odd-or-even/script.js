function check() {
    var num = Number(document.getElementById('num').value)
    var res = document.querySelector('div#res')

    if ((num % 2) == 0) {
        res.innerHTML = `This number is even.`
    } 
    else {
        res.innerHTML = `This number is odd.`
    }
}