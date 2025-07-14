// set event handler for click button of withdraw
document.getElementById("btn-withdraw").addEventListener("click", function () {
	// getting input id
	const userInputWithdraw = document.getElementById("user-input-withdraw");

	// getting input's value
	const userInputWithdrawValueString = userInputWithdraw.value;

	// converting to float number for (getting input's value)
	const userInputWithdrawValue = parseFloat(userInputWithdrawValueString);

	// clearing input field after show

	userInputWithdraw.value = "";

	// validation for user input is number or not

	if (userInputWithdrawValue < 0 || userInputWithdrawValue === 0) {
		alert("Please enter correct amount");
		return;
	}

	if (isNaN(userInputWithdrawValue)) {
		alert("Not a number");
		return;
	}

	// getting withdraw's initial h1 tag

	const initialH1TagOfWithdraw = document.getElementById(
		"initial-h1-tag-of-withdraw"
	);

	// getting string inner text of this

	const innerTextOfWithdrawString = initialH1TagOfWithdraw.innerText;

	// converting to float

	const innerTextOfWithdraw = parseFloat(innerTextOfWithdrawString);

	// getting balance id

	const beforeTotalBalance2ndTime = document.getElementById(
		"before-total-balance"
	);

	const beforeTotalBalance2ndTimeString = beforeTotalBalance2ndTime.innerText;

	const newTotalBalanceField = parseFloat(beforeTotalBalance2ndTimeString);

	// validation of user input and total balance

	if (userInputWithdrawValue > newTotalBalanceField) {
		alert("Insufficient Fund");
		return;
	}

	const newFigureOfWithdrawField = innerTextOfWithdraw + userInputWithdrawValue;

	// changing face of withdraw box
	initialH1TagOfWithdraw.innerText = newFigureOfWithdrawField;

	// doing sum and sub with previous balance and withdraw balance

	const afterCalculationBalance = newTotalBalanceField - userInputWithdrawValue;

	// changing face of balance box

	beforeTotalBalance2ndTime.innerText = afterCalculationBalance;
});
