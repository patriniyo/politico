const closeSignUpModal = document.getElementById("sign-up-modal-close");
const closeSignInModal = document.getElementById("form--sign-in");
const signInButton = document.getElementById("sign-in-button");
const signUpButton = document.getElementById("sign-up-button");
const formSignIn = document.getElementById("form--sign-in");
const formSignUp = document.getElementById("form--sign-up");
const toggleModal = (id) => {
	let modal = document.getElementById(id);
	modal.classList.toggle("show-modal");
}
if (closeSignUpModal) {
	closeSignUpModal.addEventListener("click", () => {
		toggleModal("sign-up-modal");
	});
}
if (closeSignInModal) {
	const closeSignInModal = document.getElementById("sign-in-modal-close");
	closeSignInModal.addEventListener("click", () => {
		toggleModal("sign-in-modal");
	});
}
if (signInButton) {
	signInButton.addEventListener("click", () => {
		toggleModal("sign-in-modal");
	});
}
if (signUpButton) {
	signUpButton.addEventListener("click", () => {
		toggleModal("sign-up-modal");
	});
}
if (formSignIn) {
	/*const formSignInSubmit = document.getElementById("form--sign-in-submit");*/
	formSignIn.addEventListener("submit", (e) => {
		e.preventDefault();
		window.location = "./createparty.html";
	});
}
if (formSignUp) {
	formSignUp.addEventListener("submit", (e) => {
		e.preventDefault();
		window.location = "./createparty.html";
	});
}
const buttonEdit = document.getElementsByClassName("button--edit");
const buttonUpdate = document.getElementsByClassName("button--update");
/*console.log(buttonEdit);*/
if (buttonEdit) {
	Array.from(buttonEdit).forEach((button) => {
		button.addEventListener("click", function () {
			toggleModal("update-party-modal");
		});
	});
}
if (buttonUpdate) {
	Array.from(buttonUpdate).forEach((button) => {
		button.addEventListener("click", function () {
			toggleModal("delete-party-modal");
		});
	});
}
const deletePartyClose = document.getElementById("delete-party-close");
if (deletePartyClose) {
	deletePartyClose.addEventListener("click", function () {
		toggleModal("delete-party-modal");
	});
}
const deletePartyCancel = document.getElementById("delete-party-modal-cancel");
if (deletePartyCancel) {
	deletePartyCancel.addEventListener("click", function () {
		toggleModal("delete-party-modal");
	});
}
const deletePartyOk = document.getElementById("delete-party-modal-ok");
if (deletePartyOk) {
	deletePartyOk.addEventListener("click", function () {
		toggleModal("delete-party-modal");
	});
}
const updatePartyClose = document.getElementById("update-party-modal-close");
if (updatePartyClose) {
	updatePartyClose.addEventListener("click", function () {
		toggleModal("update-party-modal");
	});
}
const updatePartySubmit = document.getElementById("update-party-submit");
if (updatePartySubmit) {
	updatePartySubmit.addEventListener("click", function (e) {
		e.preventDefault();
		toggleModal("update-party-confirmation-modal");
		toggleModal("update-party-modal");
	});
}

const updatePartyConfirmationClose = document.getElementById("update-party-confirmation-close");
if (updatePartyConfirmationClose) {
	updatePartyConfirmationClose.addEventListener("click", function () {
		toggleModal("update-party-confirmation-modal");
	});
}
const updatePartyConfirmationOk = document.getElementById("update-party-confirmation-ok");
if (updatePartyConfirmationOk) {
	updatePartyConfirmationOk.addEventListener("click", function () {
		toggleModal("update-party-confirmation-modal");
	});
}



