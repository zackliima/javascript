function check() {
    var num = Number(document.getElementById('num').value)
    var res = document.querySelector('div#res')

    if (num > 0) {
        res.innerHTML = `Your number ${num} is <strong>positive</strong>.`
    } else if (num < 0) {
        res.innerHTML = `Your number ${num} is <strong>negative</strong>.`
    } else {
        res.innerHTML = `Your number is <strong>zero</strong>.`
    }
}