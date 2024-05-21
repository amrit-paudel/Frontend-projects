

const inputs = document.querySelectorAll(".input");


function addClass(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function removeClass(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addClass);
	input.addEventListener("blur", removeClass);
});



const emailInput=document.querySelector("#email-input");
const invalidBox=document.querySelector(".validation");  // this will be displayed if invalid email is entered

console.log(emailInput)

const emailRegx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

emailInput.addEventListener("keyup", () => {

	(emailRegx.test(emailInput.value) === false && emailInput.value!=="" ) ? (invalidBox.style.display="block") : (invalidBox.style.display="none");
})