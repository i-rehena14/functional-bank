function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //clear input field
    inputField.value = '';

    return amountValue;
}

function updateTotal(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    return previousBalance;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    /* const balanceTotalText = balanceTotal.innerText;
     const previousBalance = parseFloat(balanceTotalText); */
    const previousBalance = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalance + amount;
    }
    else {
        balanceTotal.innerText = previousBalance - amount;
    }

}

document.getElementById('deposit-button').addEventListener('click', function () {
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value; */



    //get current deposit
    /* const depositCurrent = document.getElementById('deposit-total');
    const depositTotal = depositCurrent.innerText;
    const previousDeposit=parseFloat(depositTotal);

    depositCurrent.innerText = previousDeposit + depositAmount; */




    //update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance + depositAmount; */
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotal('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

//handle withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount=parseFloat(withdrawAmountText);


    //update withdraw total
    /*  const withdrawTotal = document.getElementById('withdraw-total');
     const withdrawCurrent = withdrawTotal.innerText;
     withdrawTotal.innerText = parseFloat(withdrawCurrent) + withdrawAmount; */


    //update balance after withdraw
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance - withdrawAmount; */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotal('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('you dont have that much money');
    }
});