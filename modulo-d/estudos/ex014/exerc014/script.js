function loading() {
    var msg = document.getElementById('msg')
    var img = document.querySelector('img#image')
    var data = new Date()
    var time = data.getHours()

    msg.innerHTML = `It is now ${time} hours!`

    if (time >= 5 && time < 12) {
        img.src = 'images/morning-city.webp'
        document.body.style.background = '#B8DCE8'
    } else if (time >= 12 && time < 18) {
        img.src = 'images/afternoon-city.webp'
        document.body.style.background = '#E6AC73'
    } else if (time >= 18 && time < 23) {
        img.src = 'images/night-city.webp'
        document.body.style.background = '#233A59'
    } else {
        img.src = 'images/late-night-city.webp'
        document.body.style.background = '#493D63'
    }
}