function balancTotal(balanceId) {
    const balanceTotal = document.getElementById(balanceId);
    const balanceTotalText = balanceTotal.innerText;
    const totalBalance = parseFloat(balanceTotalText);
    return totalBalance;
}
function getValue(clickId, isAdding){
    // get deposit input value
    const inputValue = document.getElementById(clickId + '-input');
    const inputAmountText = inputValue.value;
    const inputAmount = parseFloat(inputAmountText);

    // get Total deposit amount  
    let depWitTotal = document.getElementById(clickId + '-total');
    const depWitAmountText = depWitTotal.innerText;
    const depWitAmount = parseFloat(depWitAmountText);
    if (isAdding == true) {
        // Get total balaced innerText
        const balanceTotal = document.getElementById('balance-total');
        const totalBalance = balancTotal('balance-total');
        
        balanceTotal.innerText = totalBalance + inputAmount;

        depWitTotal.innerText = inputAmount + depWitAmount;

        inputValue.value = '';

    }else if(isAdding == false){
        depWitTotal.innerText = inputAmount + depWitAmount;

        // Get total balaced innerText
        const balanceTotal = document.getElementById('balance-total');
        const totalBalance = balancTotal('balance-total');

        // showing balance after substract withdraw amount
        balanceTotal.innerText = totalBalance - inputAmount;

        // clear input field after adding value
        inputValue.value = '';
    }
}
document.getElementById('deposit-button').addEventListener('click', function(){
    // getValue('deposit', true);
    getValue('deposit', true);
});

document.getElementById('withdraw-button').addEventListener('click', function(){
    getValue('withdraw', false)
});