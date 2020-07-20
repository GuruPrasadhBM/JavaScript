// Version -1- Basic
// Pulling all the DOM elements

const form = document.getElementById('form'); // can also use Query selector
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//// Show input error message
function showError(input, message) {
  //console.log('Input at Show error :' + input);
  const formControl = input.parentElement;
  if (formControl) {
    formControl.className = 'form-control error';
    const smallElement = formControl.querySelector('small');
    smallElement.innerText = message;
  } else {
    console.log('Form Control undefined');
  }
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Validate Email address
function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    showSuccess(email);
  } else {
    showError(email, 'Email is not valid');
  }
}

function checkRequired(inputArr) {
  inputArr.forEach((element) => {
    if (element.value.trim() === '') {
      showError(element, `${getFieldName(element)} is required`);
    } else {
      showSuccess(element);
    }
  });
}

function checkLength(element, min, max) {
  if (element.value.length < min) {
    showError(
      element,
      `${getFieldName(element)} must be atleast ${min} characters`
    );
  } else if (element.value.length > max) {
    showError(
      element,
      `${getFieldName(element)} must be less than ${max} characters`
    );
  } else {
    showSuccess(element);
  }
}

function checkPasswordsMatch(password1, password2) {
  if (password1.value !== password2.value) {
    showError(password2, 'Passwords do not match');
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});

//// Event Listeners
// Version - 1
// form.addEventListener('submit', function (e) {
//   e.preventDefault();

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
// });
