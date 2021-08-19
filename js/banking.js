function getInputValue(num) {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    return depositAmount;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmount = depositInput.value;
    //console.log(depositAmount);

    //get current deposit
    const depositCurrent = document.getElementById('deposit-total');
    const depositTotal = depositCurrent.innerText;
    depositCurrent.innerText = parseFloat(depositTotal) + parseFloat(depositAmount);
    // console.log(depositCurrent.innerText);

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalance + parseFloat(depositAmount);
    //console.log(balanceTotalText);

    //clear input field
    depositInput.value = '';
});

//handle withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount);

    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawCurrent = withdrawTotal.innerText;
    withdrawTotal.innerText = parseFloat(withdrawCurrent) + parseFloat(withdrawAmount);

    //update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(withdrawAmount);

    //clear the field
    withdrawInput.value = '';
})