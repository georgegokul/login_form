const form = document.querySelector('form'),
      emailField = form.querySelector('.email-field'),
      emailInput = emailField.querySelector('.email'),
      passField = form.querySelector('.create-password'),
      passInput = passField.querySelector('.password'),
      cPassField = form.querySelector('.confirm-password'),
      cPassInput = cPassField.querySelector('.cPassword')


// Email Validation 
function checkEmail() {
     const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
     if(!emailInput.value.match(pattern)) {
          return emailField.classList.add('invalid'); //adding invalid class if email doesn't match
     }
     emailField.classList.remove('invalid');// removing invalid class if email matched with email pattern
}

// Hide and show password

const eyeIcons = document.querySelectorAll(".show-hide");
// console.log(eyeIcons)

eyeIcons.forEach((eyeIcon) => {

eyeIcon.addEventListener("click", () => {
     const pInput = eyeIcon.parentElement.querySelector("input");
     const child_nodes = eyeIcon.childNodes
     // console.log(pInput)
     if (pInput.type === "password") {
          // console.log()
          // console.log(child_nodes[1].classList)
          child_nodes[1].classList.replace("fa-eye-slash", "fa-eye");
          return (pInput.type = "text");
     }
     child_nodes[1].classList.replace("fa-eye", "fa-eye-slash");
     pInput.type = "password";
})});

// Password Validation
function createPass(){
     const passPattern = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

     if(!passInput.value.match(passPattern)) {
          return passField.classList.add("invalid");
     }
     return passField.classList.remove("invalid");
}

// confirm password validation

function confirmPass(){
     if(passInput.value !== cPassInput.value || cPassInput.value === ""){
          return cPassField.classList.add("invalid");

     }
     cPassField.classList.remove("invalid");

}

// Calling function on form submit 
form.addEventListener('submit', (e) =>{
     e.preventDefault(); // Preventing form submitting
     checkEmail();
     createPass();
     confirmPass();

     // calling function on key up
     emailInput.addEventListener('keyup', checkEmail);
     passInput.addEventListener('keyup', createPass);
     passInput.addEventListener('keyup', confirmPass);

})

