function check() {
    var note_v = Number(document.getElementById('num').value)
    var res = document.querySelector('div#res')

    if (note_v < 0 || note_v > 10) {
        window.alert('Please enter the correct value of your grade and try again.')
    } else if (note_v < 5) {
        res.innerHTML = `You have <strong>Failed</strong>.`
    } else if (note_v < 7) {
        res.innerHTML = `You are <strong>Remedial</strong>.`
    } else if (note_v < 9) {
        res.innerHTML = `You have <strong>Passed</strong>.`
    } else {
        res.innerHTML = `You have <strong>Passed with excellence</strong>.`
    }
}