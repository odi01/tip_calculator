const presentagesMethod = "presentages"
const moneyMethod = "customeTipAmount"

getTipMethod = () => {
    return document.getElementById("selectTipMethod").value;
}

displayTipMethod = () => {
    resetCurrentInputs()

    if (getTipMethod() == presentagesMethod) {
        document.getElementById(presentagesMethod).style.display = "block";
        document.getElementById(moneyMethod).style.display = "none";

    }
    else {
        document.getElementById(presentagesMethod).style.display = "none";
        document.getElementById(moneyMethod).style.display = "block";

    }
}

getTotal = () => {
    const baseBillAmount = document.getElementById("baseBillAmount").value
    const numOfDiners = document.getElementById("dinersNumberInput").value
    let total = 0
    let totalPerDinner = 0

    if (getTipMethod() == presentagesMethod) {
        let tipPresentagesAmount = document.getElementById("presentagesAmount").value
        total = Math.floor(baseBillAmount * (1 + (tipPresentagesAmount / 100)))
        totalPerDinner = total / numOfDiners
    }

    else {
        let tipMoneyAmount = document.getElementById("customeTipMoneyAmount").value
        total = Math.floor(Number(baseBillAmount) + Number(tipMoneyAmount))
        totalPerDinner = total / numOfDiners
    }

    document.getElementById("totalBillAmount").innerHTML = Number((total).toFixed(2))
    document.getElementById("totalPerDinerAmount").innerHTML = Number((totalPerDinner).toFixed(2))
}

validedAmountInput = (elem) => {
    getTotal()
    // alert(elem.id)
}

resetCurrentInputs = () => {
    document.getElementById("totalBillAmount").innerHTML = Number(0)
    document.getElementById("totalPerDinerAmount").innerHTML = Number(0)
}

