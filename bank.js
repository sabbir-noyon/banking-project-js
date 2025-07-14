// For Deposit
document.getElementById("btn-deposit").addEventListener("click", function () {
	const inputForDeposit = document.getElementById("input-for-deposit");

	// input er value
	const inputForDepositValue = inputForDeposit.value;

	const depositAmountBefore = document.getElementById("deposit-amount-before");

	// converting as parseFloat
	const depositAmountBeforeConverted = parseFloat(
		depositAmountBefore.innerText
	);

	const inputForDepositValueConverted = parseFloat(inputForDepositValue);

	inputForDeposit.value = "";

	// validation user input number or not

	if (
		inputForDepositValueConverted < 0 ||
		inputForDepositValueConverted === 0
	) {
		alert("Please enter correct amount");
		return;
	}

	if (isNaN(inputForDepositValueConverted)) {
		alert("Not a number");
		return;
	}

	const newTotalValueOfDeposit =
		depositAmountBeforeConverted + inputForDepositValueConverted;
	depositAmountBefore.innerText = newTotalValueOfDeposit;

	// Balance step

	const beforeTotalBalance = document.getElementById("before-total-balance");

	const beforeTotalBalanceValue = beforeTotalBalance.innerText;

	const beforeTotalBalanceValueConverted = parseFloat(beforeTotalBalanceValue);

	const newBalanceTotal =
		beforeTotalBalanceValueConverted + inputForDepositValueConverted;

	beforeTotalBalance.innerText = newBalanceTotal;
});
