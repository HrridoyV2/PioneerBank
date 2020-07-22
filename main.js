// Function
function getInputNumber(id){
    const amount = parseFloat(document.getElementById(id).value);
    document.getElementById(id).value = "";
    return amount;
}
function  updateAmount(id, inputAmount){
    const currentAmount = parseFloat(document.getElementById(id).innerText);
    const totalAmount = currentAmount + inputAmount;
    document.getElementById(id).innerText = totalAmount;
}
//
 const login = document.getElementById('login');
 login.addEventListener('click', function(){
     document.getElementById('login-area').style.display = "none";
     document.getElementById('transaction-area').style.display = "block";
 })
//Deposit Button
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function(){
    const depositAmount = getInputNumber('deposit-amount');
    
    updateAmount('current-deposit', depositAmount);
    updateAmount('current-balance', depositAmount);
    
});
//Withdraw Button
const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmountNumber = getInputNumber('withdraw-amount');

    updateAmount('current-withdraw', withdrawAmountNumber);
    updateAmount('current-balance', -1*withdrawAmountNumber);
})