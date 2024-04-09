// toggle password visibility
function togglePasswordVisibility() {
  var passwordInput = document.querySelector('input[name="password"]');
  var toggleIcon = document.querySelector('.toggle-icon i');
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove('fa-eye');
    toggleIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove('fa-eye-slash');
    toggleIcon.classList.add('fa-eye');
  }
}

// validate email format
function validateEmail(email) {
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

// validate contact number
function validateContactNumber(contactNumber) {
  var regex = /^\+?[0-9]{9,13}$/;
  return regex.test(contactNumber);
}

// handle form submission
function handleFormSubmission(event) {
  event.preventDefault();

  var firstNameInput = document.querySelector('input[name="firstname"]');
  var lastNameInput = document.querySelector('input[name="lastname"]');
  var emailInput = document.querySelector('input[name="email"]');
  var addressInput = document.querySelector('input[name="address"]');
  var contactNumberInput = document.querySelector('input[name="ctnumber"]');
  var citySelect = document.querySelector('select[name="ipcity"]');
  var stateSelect = document.querySelector('select[name="ipstate"]');
  var passwordInput = document.querySelector('input[name="password"]');

  // Clear previous error messages
  var errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function (errorMessage) {
    errorMessage.remove();
  });

  var valid = true;

  // Validation for First Name
  if (firstNameInput.value.length < 3 || firstNameInput.value.length > 20) {
    var errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = "Cần phải nhập ít nhất từ 3 đến 20 kí tự !";
    firstNameInput.parentNode.appendChild(errorMessage);
    valid = false;
  }

  // Validation for Last Name
  if (lastNameInput.value.length < 3 || lastNameInput.value.length > 20) {
    var errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = "Cần phải nhập ít nhất từ 3 đến 20 kí tự !";
    lastNameInput.parentNode.appendChild(errorMessage);
    valid = false;
  }

  // Validation for Email
  if (!validateEmail(emailInput.value) || emailInput.value.length < 8 || emailInput.value.length > 30) {
    var errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = "Hãy nhập đúng định dạng email (VD: example@domain.com) từ 8 đến 30 kí tự !";
    emailInput.parentNode.appendChild(errorMessage);
    valid = false;
  }

  // Validation for Address
  if (addressInput.value.length > 100) {
    var errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = "Địa chỉ không được quá 100 kí tự !";
    addressInput.parentNode.appendChild(errorMessage);
    valid = false;
  }

  // Validation for Contact Number
  if (!validateContactNumber(contactNumberInput.value) || contactNumberInput.value.length < 9 || contactNumberInput.value.length > 13) {
    var errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = "Số điện thoại cần ít nhất từ 9 đến 13 kí tự !";
    contactNumberInput.parentNode.appendChild(errorMessage);
    valid = false;
  }

  // Validation for Password
  if (passwordInput.value.length < 8 || passwordInput.value.length > 20) {
    var errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = "Mật khẩu cần nhập ít nhất từ 8 đến 20 kí tự !";
    passwordInput.parentNode.appendChild(errorMessage);
    valid = false;
  }

  // form is valid
  if (valid) {
    var saveButton = document.getElementById('login-button');
    var cancelButton = document.getElementById('cancel-button');
    saveButton.disabled = true;
    cancelButton.disabled = true;
    // Simulate loading for 3 seconds
    setTimeout(function () {
      // Reset form and show success message
      document.querySelector('form').reset();
      alert("Form submitted successfully!");
      saveButton.disabled = false;
      cancelButton.disabled = false;
    }, 3000);
  }
}

// event listener for form submission
document.querySelector('form').addEventListener('submit', handleFormSubmission);

// handle input focus
function handleInputFocus(event) {
  var errorMessage = event.target.parentNode.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }
}

// event listener for input focus
var inputFields = document.querySelectorAll('input, select');
inputFields.forEach(function (input) {
  input.addEventListener('focus', handleInputFocus);
});
