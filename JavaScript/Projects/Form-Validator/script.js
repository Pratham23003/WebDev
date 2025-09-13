/* notes() => {
    * first i got the dom references
    * then I created a method which checks all the fields for empty values and returns a bool 
      - if (true) (means input fields were not empty then it will proceed on to check individual field)
      - if (false) (field or fields were empty) display error
}
*/

//dom references
const registrationForm = document.getElementById('registration-form');
const submitBtn = document.getElementById('submit-btn');
const userNameField = document.getElementById('username');
const emailField = document.getElementById('email');
const pswdField = document.getElementById('password');
const confirmpswdField = document.getElementById('password2');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    //before validating values, creating a flag variable(which will be set to true byDefault) to track if the whole form is valid.
    //we'll call validation functions afterwards and if any of them returns false we'll set the flag to false

    const isRequiredValid = checkRequired([userNameField,emailField,pswdField,confirmpswdField]); 
});

//checks for empty values in all fields
function checkRequired(inputArray){
    //flag variable 
    let isValid = true;

    inputArray.forEach(input => {
        if(input.value.trim() === ""){ //this means empty field
            // showError();
            //setting the flag to false;
            isValid = false;
        }
        // else{
        //     showSuccess();
        // }
    });
}