function check() {
    var purchase_value = Number(document.getElementById('purchase_value').value)
    var vip = document.querySelector('input[name="vip"]:checked').id
    var res = document.querySelector('div#res')
    var discount_percentage

    if (purchase_value > 0 && purchase_value < 100) {
        discount_percentage = 0
    } else if (purchase_value < 500) {
        discount_percentage = 0.05
    } else if (purchase_value < 1000) {
        discount_percentage = 0.10
    } else if (purchase_value => 1000) {
        discount_percentage = 0.15
    } else {
        res.innerHTML = `<strong>Invalid value</strong>`
    }

    if (vip == 'yesv') {
        var discount_vip = 0.05
    } else {
        var discount_vip = 0
    }

    var total_discount_percentage = discount_percentage + discount_vip
    var total_discount = purchase_value * total_discount_percentage
    var final_value = purchase_value - total_discount

    res.innerHTML = `<Strong>Original Value:</strong> ${purchase_value}<br>
    <Strong>Discount Percentage:</strong> ${total_discount_percentage}<br>
    <Strong>Discount Value:</strong> ${total_discount}<br>
    <Strong>Final Value:</strong> ${final_value}`
}