const inputs = document.querySelectorAll(".input");


function addClass() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function removeClass() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addClass);
	input.addEventListener("blur", removeClass);
});



// regx

const uppercaseRegx = /(?=.*[A-Z])/;
const numericRegx=/(?=.*[0-9])/;
const specialCharacterRegx=/(?=.*[!@#$%^&*])/;
const minimumLengthRegx=/(?=.{6,})/;


const upper = document.querySelector(".uppercase");
const numeric = document.querySelector(".numeric");
const special = document.querySelector(".special");
const length = document.querySelector(".length");

const passwordField = document.getElementById("password-field");



passwordField.addEventListener("keyup", () => {

	(uppercaseRegx.test(passwordField.value) === false && passwordField.value!=="" ) ? (upper.style.display="block") : (upper.style.display="none");
	(numericRegx.test(passwordField.value) === false && passwordField.value!=="" ) ? (numeric.style.display="block") : (numeric.style.display="none");
	(specialCharacterRegx.test(passwordField.value) === false && passwordField.value!=="" ) ? (special.style.display="block") : (special.style.display="none");
	(minimumLengthRegx.test(passwordField.value) === false && passwordField.value!=="" ) ? (length.style.display="block") : (length.style.display="none");
})



