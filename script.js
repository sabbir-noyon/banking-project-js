document.getElementById("btn-submit").addEventListener("click", function () {
	const inputUserEmail = document.getElementById("input-user-email");
	const emailValue = inputUserEmail.value;

	// get and set password
	const inputUserPassword = document.getElementById("input-user-password");
	const passwordValue = inputUserPassword.value;

	console.log(emailValue, passwordValue);

	if (emailValue === "example@gmail.com" && passwordValue === "Abc123$") {
		window.location.href = "bank.html";
	} else {
		alert("Invalid User");
	}
});
