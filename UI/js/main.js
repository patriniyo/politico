const closeSignUpModal = document.getElementById('sign-up-modal-close');
const closeSignInModal = document.getElementById('sign-in-modal-close');
const signInButton = document.getElementById('sign-in-button');
const signUpButton = document.getElementById('sign-up-button');
const formSignIn = document.getElementById('form--sign-in');
const formSignUp = document.getElementById('form--sign-up');
const buttonEdit = document.getElementsByClassName('button--edit');
const buttonUpdate = document.getElementsByClassName('button--update');
const deletePartyClose = document.getElementById('delete-party-close');
const deletePartyCancel = document.getElementById('delete-party-modal-cancel');
const deletePartyOk = document.getElementById('delete-party-modal-ok');
const updatePartyClose = document.getElementById('update-party-modal-close');
const updatePartySubmit = document.getElementById('update-party-submit');
const updatePartyConfirmationClose = document.getElementById('update-party-confirmation-close');
const runComfirmationOk = document.getElementById('run-comfirmation-ok');
const updatePartyConfirmationOk = document.getElementById('update-party-confirmation-ok');
const runComfirmationClose = document.getElementById('run-comfirmation-close');
const runButton = document.getElementsByClassName('button--run');
const toggleModal = (id) => {
	const modal = document.getElementById(id);
	modal.classList.toggle('show-modal');
};
if (closeSignUpModal) {
	closeSignUpModal.addEventListener('click', () => {
		toggleModal('sign-up-modal');
	});
}
if (closeSignInModal) {
	closeSignInModal.addEventListener('click', () => {
		toggleModal('sign-in-modal');
	});
}
if (signInButton) {
	signInButton.addEventListener('click', () => {
		toggleModal('sign-in-modal');
	});
}
if (signUpButton) {
	signUpButton.addEventListener('click', () => {
		toggleModal('sign-up-modal');
	});
}
if (formSignIn) {
	/* const formSignInSubmit = document.getElementById("form--sign-in-submit"); */
	formSignIn.addEventListener('submit', (e) => {
		e.preventDefault();
		window.location = './createparty.html';
	});
}
if (formSignUp) {
	formSignUp.addEventListener('submit', (e) => {
		e.preventDefault();
		window.location = './createparty.html';
	});
}

/* console.log(buttonEdit); */
if (buttonEdit) {
	Array.from(buttonEdit).forEach((button) => {
		button.addEventListener('click', () => {
			toggleModal('update-party-modal');
		});
	});
}
if (runButton) {
	Array.from(runButton).forEach((button) => {
		button.addEventListener('click', () => {
			toggleModal('run-comfirmation-modal');
		});
	});
}
if (buttonUpdate) {
	Array.from(buttonUpdate).forEach((button) => {
		button.addEventListener('click', () => {
			toggleModal('delete-party-modal');
		});
	});
}
if (deletePartyClose) {
	deletePartyClose.addEventListener('click', () => {
		toggleModal('delete-party-modal');
	});
}
if (deletePartyCancel) {
	deletePartyCancel.addEventListener('click', () => {
		toggleModal('delete-party-modal');
	});
}

if (deletePartyOk) {
	deletePartyOk.addEventListener('click', () => {
		toggleModal('delete-party-modal');
	});
}
if (updatePartyClose) {
	updatePartyClose.addEventListener('click', () => {
		toggleModal('update-party-modal');
	});
}

if (updatePartySubmit) {
	updatePartySubmit.addEventListener('click', (e) => {
		e.preventDefault();
		toggleModal('update-party-confirmation-modal');
		toggleModal('update-party-modal');
	});
}

if (updatePartyConfirmationClose) {
	updatePartyConfirmationClose.addEventListener('click', () => {
		toggleModal('update-party-confirmation-modal');
	});
}

if (updatePartyConfirmationOk) {
	updatePartyConfirmationOk.addEventListener('click', () => {
		toggleModal('update-party-confirmation-modal');
	});
}

if (runComfirmationClose) {
	runComfirmationClose.addEventListener('click', () => {
		toggleModal('run-comfirmation-modal');
	});
}
if (runComfirmationOk) {
	runComfirmationOk.addEventListener('click', () => {
		toggleModal('run-comfirmation-modal');
	});
}
