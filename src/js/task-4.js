const form = document.querySelector('.login-form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {email, password} = form.elements;

    const emailTrimmed = cleanValue(email.value);
    const passwordTrimmed = cleanValue(password.value);

    if ( emailTrimmed === '' || passwordTrimmed === '' ) {
        alert('All form fields must be filled in');
        return
    }
    const formData = {
        email: emailTrimmed,
        password: passwordTrimmed,
    };
    console.log("Form data", formData);
    form.reset();

})

function cleanValue(value) {
      return value.trim()
}