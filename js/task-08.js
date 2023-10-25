const formSubmit = document.querySelector('.login-form');
const loginObject = [];

const loginForm = (event) => {
    event.preventDefault();
    const {email, password} = event.currentTarget;
    if(email.value && password.value) {
        

    const temp = {email:email.value, password:password.value};
    loginObject.push(temp);
    console.log(...loginObject);
    event.currentTarget.reset();
    return;
    }
    return alert('all fields must be filled in!');
};

formSubmit.addEventListener('submit', loginForm);
