function check() {
    var purchase_value = Number(document.getElementById('purchase_value').value)
    var vip = document.querySelector('input[name="vip"]:checked').id
    var res = document.querySelector('div#res')
    var discount_percentage

    if (vip == 'yesv') {
        var discount_vip = 0.05
    } else {
        var discount_vip = 0
    }

    if (purchase_value <= 0) {
        res.innerHTML = `<strong>Invalid value</strong>`
    } else {
        if (purchase_value > 0 && purchase_value < 100) {
            discount_percentage = 0
        } else if (purchase_value < 500) {
            discount_percentage = 0.05
        } else if (purchase_value < 1000) {
            discount_percentage = 0.10
        } else {
            discount_percentage = 0.15
        }

        var total_discount_percentage = discount_percentage + discount_vip
        var total_discount = purchase_value * total_discount_percentage
        var final_value = purchase_value - total_discount

        var currency = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        var percentage = new Intl.NumberFormat('pt-BR', {
            style: 'percent',
            maximumFractionDigits: 2
        })

        res.innerHTML = `<Strong>Original Value:</strong> ${currency.format(purchase_value)}<br>
        <Strong>Discount Percentage:</strong> ${percentage.format(total_discount_percentage)}<br>
        <Strong>Discount Value:</strong> ${currency.format(total_discount)}<br>
        <Strong>Final Value:</strong> ${currency.format(final_value)}`
    }
}