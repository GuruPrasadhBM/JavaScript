// Version -1- Basic
// Pulling all the DOM elements

const form = document.getElementById('form'); // can also use Query selector
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const smallElement = formControl.querySelector('small');
  smallElement.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Validate Email address
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//// Event Listeners

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Version - 1

  //   if (username.value === '') {
  //     showError(username, 'Username is requried');
  //   } else {
  //     showSuccess(username);
  //   }

  //   if (email.value === '') {
  //     showError(email, 'Email is requried');
  //   } else if (!isValidEmail(email.value)) {
  //     showError(email, 'Invalid Email');
  //   } else {
  //     showSuccess(email);
  //   }

  //   if (password.value === '') {
  //     showError(password, 'Password is requried');
  //   } else {
  //     showSuccess(password);
  //   }

  //   if (password2.value === '') {
  //     showError(password2, 'Password2 is requried');
  //   } else {
  //     showSuccess(password2);
  //   }
});
