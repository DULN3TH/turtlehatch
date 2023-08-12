/* const form = document.getElementById('contactForm');
const phone = document.getElementById('phone');
const mail = document.getElementById('email');
const confMail = document.getElementById('confirmEmail');
const Name = document.getElementById('fullName');

form.addEventListener('submit', e => {
  e.preventDefault();
  validate();
});

const setError = (input, message) => {
  const errorContainer = input.parentElement.querySelector('.error');
  errorContainer.innerText = message;
  input.parentElement.classList.add('error');
  input.parentElement.classList.remove('success');
};

const setSuccess = input => {
  const errorContainer = input.parentElement.querySelector('.error');
  errorContainer.innerText = '';
  input.parentElement.classList.add('success');
  input.parentElement.classList.remove('error');
};

const validate = () => {
  const Fname = Name.value.trim();
  const phoneNum = phone.value.trim();
  const EMail = mail.value.trim();
  const confirmMail = confMail.value.trim();

  if (Fname === '') {
    setError(Name, 'Enter Name');
  } else {
    setSuccess(Name);
  }

  if (phoneNum === '') {
    setError(phone, 'Phone number is required');
  } else if (/^[A-Za-z\s]+$/.test(phoneNum)) {
    setError(phone, 'Phone number should not contain any letters');
  } else {
    setSuccess(phone);
  }

  if (EMail === '') {
    setError(mail, 'Email is required');
  } else {
    setSuccess(mail);
  }

  if (confirmMail === '') {
    setError(confMail, 'Confirm Email is required');
  } else if (confirmMail !== EMail) {
    setError(confMail, 'Emails do not match');
  } else {
    setSuccess(confMail);
  }

  // Check if all fields are valid before enabling the "Continue with Purchase" button
  const isValidForm = Fname !== '' && phoneNum !== '' && EMail !== '' && confirmMail !== '' && confirmMail === EMail;
  const confirmButton = document.getElementById('confirm');
  confirmButton.disabled = !isValidForm;
};

// Optionally, you can add event listeners to individual input fields to validate them in real-time
Name.addEventListener('input', () => validate());
phone.addEventListener('input', () => validate());
mail.addEventListener('input', () => validate());
confMail.addEventListener('input', () => validate());
 */