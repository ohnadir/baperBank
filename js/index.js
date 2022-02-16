function commonFunction(typed, isAdding){
    const inputValue = document.getElementById(typed + '-input');
    const inputText = inputValue.value;
    const inputAmount = parseFloat(inputText);

    const depositWithdrawTotal = document.getElementById(typed + '-total');
    const depositWithdrawTotalText = depositWithdrawTotal.innerText;
    const totalDepositWithdraw = parseFloat(depositWithdrawTotalText);
    depositWithdrawTotal.innerText = inputAmount + totalDepositWithdraw;

    // total balance 
    const total = document.getElementById('balance-total');
    const totalBalanceText = total.innerText;
    const totalBalance = parseFloat(totalBalanceText);

    if (isAdding == true) {
        total.innerText = totalBalance + inputAmount;
    } else{
        total.innerText = totalBalance - inputAmount;
    }
    // total.innerText = totalBalance + depositAmount;
    inputValue.value = '';
}
document.getElementById('deposit-button').addEventListener('click', function(){
    commonFunction('deposit', true);
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    commonFunction('withdraw', false)
})