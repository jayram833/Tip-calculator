"use strict";

const btnResult = document.querySelector(".btn_get_result");
const tipAmtText = document.querySelector(".tip_amt");
const totalAmtText = document.querySelector(".total_amt");
document.querySelector(".per").defaultValue = 5;

const calcTip = function () {
  const billAmt = Number(document.querySelector(".amt").value);
  const perAmt = Number(document.querySelector(".per").value);

  if (!billAmt || !perAmt) {
    alert("please enter bill amount and tip percentage");
  } else {
    const tipAmt = (billAmt / 100) * perAmt;
    tipAmtText.textContent = tipAmt;
    totalAmtText.textContent = tipAmt + billAmt;

    document.querySelector(".amt").value = "";
    // document.querySelector(".per").value = "";
  }
};

btnResult.addEventListener("click", function (e) {
  e.preventDefault();
  calcTip();
});
