function check() {
    var purchase_value = Number(document.getElementById('purchase_value').value)
    var vip = document.getElementsByName('vip')
    var res = document.querySelector('div#res')

    if (purchase_value < 0) {
        res.innerHTML = `<strong>Invalid value</strong>`
    } 
}