// document.getElementById('deposit-button').addEventListener('click', function(e){
//     let depositInput = document.getElementById('deposit-input')

//    let depositAmount = parseFloat(depositInput.value)



// let depositTotal = document.getElementById('deposit-total')



// const currentDepositamount = parseFloat(depositTotal.innerText)
// const updatedTotal = parseFloat(currentDepositamount + depositAmount)

// depositTotal.innerText = updatedTotal

// const totalBalance = document.getElementById('total-balance')
// const currenTotalBalance = parseFloat(totalBalance.innerText)
// let updatedTotalBalance = currenTotalBalance + depositAmount
// totalBalance.innerText = updatedTotalBalance

// depositInput.value = ''


   
    
    
// })

document.getElementById('deposit-button').addEventListener('click', function(){
    let depositInput = document.getElementById('deposit-input')

    let depositAmount = parseFloat(depositInput.value)
    let depositTotal = document.getElementById('deposit-total')
    const currentDepositamount = parseFloat(depositTotal.innerText)
const updatedTotal = currentDepositamount + depositAmount
depositTotal.innerText = updatedTotal

const totalBalance = document.getElementById('total-balance')
const currenTotalBalance = parseFloat(totalBalance.innerText)

const updatedTotalBalance = currenTotalBalance + depositAmount
totalBalance.innerText = updatedTotal

depositInput.value = ''
})




document.getElementById('withdraw-button').addEventListener('click', function(){
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawAmount = parseFloat(withdrawInput.value);
    
    let withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawAmount = parseFloat(withdrawTotal.innerText);
    const updatedWithdrawTotal = currentWithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = updatedWithdrawTotal;

    const totalBalance = document.getElementById('total-balance');
    const currentTotalBalance = parseFloat(totalBalance.innerText);
    const updatedTotalBalance = currentTotalBalance - withdrawAmount;
    totalBalance.innerText = updatedTotalBalance;

    withdrawInput.value = '';










})