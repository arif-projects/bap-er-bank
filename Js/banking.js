//transaction
//diposit
document.getElementById("diposit-btn").addEventListener("click", function () {
  const dipositeInput = document.getElementById("diposit-amount");
  const currentDispositeAmount = parseFloat(dipositeInput.value);
  const diposit = document.getElementById("diposite");
  const previousDipositAmount = parseFloat(diposit.innerText);
  const totalDipositAmount = currentDispositeAmount + previousDipositAmount;
  diposit.innerText = totalDipositAmount;
  dipositeInput.value = "";

  //total
  const total = document.getElementById("total");
  const previousTotal = parseFloat(total.innerText);
  const currentTotal = previousTotal + currentDispositeAmount;
  total.innerText = currentTotal;
});

//withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-amount");
  const currentWithdrawAmount = parseFloat(withdrawInput.value);
  const withdraw = document.getElementById("withdraw");
  const previousWithdrawAmount = parseFloat(withdraw.innerText);
  const totalWithdrawAmount = currentWithdrawAmount + previousWithdrawAmount;
  withdraw.innerText = totalWithdrawAmount;
  withdrawInput.value = "";

  // total
  const total = document.getElementById("total");
  const previousTotal = parseFloat(total.innerText);
  const currentTotal = previousTotal - currentWithdrawAmount;
  total.innerText = currentTotal;
});
