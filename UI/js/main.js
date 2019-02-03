const closeSignUpModal = document.getElementById("sign-up-modal-close");
closeSignUpModal.addEventListener("click", ()=>{
	toggleModal("sign-up-modal");
});
const closeSignInModal = document.getElementById("sign-in-modal-close");
closeSignInModal.addEventListener("click", ()=>{
	toggleModal("sign-in-modal");
});
const signInButton = document.getElementById("sign-in-button");
signInButton.addEventListener("click", ()=>{
	toggleModal("sign-in-modal");
});
const signUpButton = document.getElementById("sign-up-button");
signUpButton.addEventListener("click", ()=>{
	toggleModal("sign-up-modal");
});
const toggleModal = (id) =>{
	let modal = document.getElementById(id);
    modal.classList.toggle("show-modal");
}

/*const formSignInSubmit = document.getElementById("form--sign-in-submit");*/
const formSignIn = document.getElementById("form--sign-in");
formSignIn.addEventListener("submit", (e)=>{
	e.preventDefault();
	window.location = "./ui/html/createparty.html";
});
const formSignUp = document.getElementById("form--sign-up");
formSignUp.addEventListener("submit", (e)=>{
	e.preventDefault();
	window.location = "./ui/html/createparty.html";
});

