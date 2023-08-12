const form = document.getElementById('form');
console.log(form);
const cardNumber = document.getElementById('cnumber');
console.log(cardNumber);
if (localStorage.getItem("cardNo") !== null) {
  if (cardNumber) {
    cardNumber.value = localStorage.getItem("cardNo");
  }
}
const expiryDate = document.getElementById('exp');
if (localStorage.getItem("expday") !== null) {
  if (expiryDate) {
    expiryDate.value = localStorage.getItem("expday");
  }
}
const cvc = document.getElementById('cvc');
if (localStorage.getItem("cvc") !== null) {
  if (cvc) {
    cvc.value = localStorage.getItem("cvc");
  }
}
const nameOnCard = document.getElementById('name');
if (localStorage.getItem("cardname") !== null) {
  if (nameOnCard) {
    nameOnCard.value = localStorage.getItem("cardname");
  }
}

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    validateInputs();
  });
}


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateInputs = () => {
  const cardNumberValue = cardNumber.value.trim();
  localStorage.setItem("cardNo", cardNumberValue);
  const expiryDateValue = expiryDate.value;
  localStorage.setItem("expday", expiryDateValue);
  const cvcValue = cvc.value.trim();
  localStorage.setItem("cvc", cvcValue);
  const nameOnCardValue = nameOnCard.value.trim();
  localStorage.setItem("cardname", nameOnCardValue);


  if (cardNumberValue === '') {
    setError(cardNumber, 'Card Number is required');
  } else if (!/^[A-Za-z\s]+$/.test(nameOnCardValue)) {
    setError(nameOnCard, 'Name should contain only alphabets');
  } else {
    setSuccess(cardNumber);
    setSuccess(nameOnCard);
  }


  if (expiryDateValue === '') {
    setError(expiryDate, 'Expiry Date is required');
  } else {
    const today = new Date();
    const selectedDate = new Date(expiryDateValue);

    if (selectedDate <= today) {
      setError(expiryDate, 'Expiry Date should be higher than today');
    } else {
      setSuccess(expiryDate);
    }
  }


  if (cvcValue === '') {
    setError(cvc, 'CVC is required');
  } else if (!/^\d{3}$/.test(cvcValue)) {
    setError(cvc, 'CVC should contain exactly 3 digits');
  } else {
    setSuccess(cvc);
  }


};





const form1 = document.getElementById('contactForm');
const phone = document.getElementById('phone');
const mail = document.getElementById('email');
const confMail = document.getElementById('confirmEmail');
const Name = document.getElementById('fullName');
const Gender = document.getElementById('gender');
if (localStorage.getItem("name") !== null) {
  if (Name) {
    Name.value = localStorage.getItem("name");
  }
}
if (localStorage.getItem("phoneNumber") !== null) {
  if (phone) {
    phone.value = localStorage.getItem("phoneNumber");
  }
}
if (localStorage.getItem("email") !== null) {
  if (mail) {
    mail.value = localStorage.getItem("email");
  }
} if (Gender) {
  if (localStorage.getItem("gen") == "male") {
    Gender.children[1].selected = true;
  } else if (localStorage.getItem("gen") == "female") {
    Gender.children[2].selected = true;
  }
}


if (form1) {
  form1.addEventListener('submit', e => {
    e.preventDefault();
    validate();
  });
}
const error = (input, message) => {
  const errorContainer = input.parentElement.querySelector('.error');
  console.log(input.parentElement);
  errorContainer.innerText = message;
  input.parentElement.classList.add('error');
  input.parentElement.classList.remove('success');
};

const success = input => {
  const errorContainer = input.parentElement.querySelector('.error');
  errorContainer.innerText = '';
  input.parentElement.classList.add('success');
  input.parentElement.classList.remove('error');
};

const validate = () => {
  const Fname = Name.value.trim();
  console.log(Fname);
  localStorage.setItem("name", Fname);
  console.log(localStorage.getItem("name"));
  const phoneNum = phone.value.trim();
  localStorage.setItem("phoneNumber", phoneNum);
  const EMail = mail.value.trim();
  localStorage.setItem("email", EMail);
  const confirmMail = confMail.value.trim();
  localStorage.setItem("gen", Gender.value);

  if (Fname == '') {
    error(Name, 'Enter Name');
  } else {
    success(Name);
  }

  if (phoneNum == '') {
    error(phone.parentElement, 'Phone number is required');
  } else if (/^[A-Za-z\s]+$/.test(phoneNum)) {
    error(phone.parentElement, 'Phone number should not contain any letters');
  } else {
    success(phone.parentElement);
  }

  if (EMail == '') {
    error(mail, 'Email is required');
  } else {
    success(mail);
  }

  if (confirmMail == '') {
    error(confMail, 'Confirm Email is required');
  } else if (confirmMail !== EMail) {
    error(confMail, 'Emails do not match');
  } else {
    success(confMail);
  }

  // Check if all fields are valid before enabling the "Continue with Purchase" button
  const isValidForm = Fname !== '' && phoneNum !== '' && EMail !== '' && confirmMail !== '' && confirmMail === EMail;
  const confirmButton = document.getElementById('confirm');
  confirmButton.disabled = !isValidForm;
};





const phoneInputField = document.querySelector("#phone");
if (phoneInputField) {
  const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
}


/* Confirmation JS */

let Table = document.getElementById("confTable");

if (Table) {
  if (localStorage.getItem("name") !== null) {

    document.getElementById("conName").innerHTML = (localStorage.getItem("name"));
  }

  if (localStorage.getItem("phoneNumber") !== null) {

    document.getElementById("conMob").innerHTML = (localStorage.getItem("phoneNumber"));
  }

  if (localStorage.getItem("email") !== null) {

    document.getElementById("conMail").innerHTML = (localStorage.getItem("email"));
  }

  if (localStorage.getItem("gen") !== null) {

    document.getElementById("conGender").innerHTML = (localStorage.getItem("gen"));
  }
  if (localStorage.getItem("dateNow") !== null) {

    document.getElementById("conDate").innerHTML = (localStorage.getItem("dateNow"));
  }
  if (localStorage.getItem("hrs") !== null) {

    document.getElementById("conDur").innerHTML = (localStorage.getItem("hrs"));
  }
  if (localStorage.getItem("timeBtn") !== null) {

    document.getElementById("conTime").innerHTML = (localStorage.getItem("timeBtn"));
  }
  if (localStorage.getItem("Adult") !== null) {

    let confAdult = document.createElement("tr");
    let numAdult = document.createElement("td");
    let chargeAdult = document.createElement("td");

    numAdult.innerHTML = localStorage.getItem("Adult") + " SL Adults";
    chargeAdult.innerHTML = "$" + localStorage.getItem("adcharge");
    confAdult.appendChild(numAdult);
    confAdult.appendChild(chargeAdult);
    Table.appendChild(confAdult);
  }

  if (localStorage.getItem("adultF") !== null) {

    let confAdult = document.createElement("tr");
    let numAdult = document.createElement("td");
    let chargeAdult = document.createElement("td");

    numAdult.innerHTML = localStorage.getItem("adultF") + " Foreign Adults";
    chargeAdult.innerHTML = "$" + localStorage.getItem("fadcharge");
    confAdult.appendChild(numAdult);
    confAdult.appendChild(chargeAdult);
    Table.appendChild(confAdult);
  }

  if (localStorage.getItem("childLK") !== null) {

    let confAdult = document.createElement("tr");
    let numAdult = document.createElement("td");
    let chargeAdult = document.createElement("td");
    

    numAdult.innerHTML = localStorage.getItem("childLK") + " SL Children";
    chargeAdult.innerHTML = "$" + localStorage.getItem("cslchild");
    confAdult.appendChild(numAdult);
    confAdult.appendChild(chargeAdult);
    Table.appendChild(confAdult);
  }
  if (localStorage.getItem("childForin") !== null) {

    let confAdult = document.createElement("tr");
    let numAdult = document.createElement("td");
    let chargeAdult = document.createElement("td");

    numAdult.innerHTML = localStorage.getItem("childForin") + " Foreign Children";
    chargeAdult.innerHTML = "$" + localStorage.getItem("fccharge");
    confAdult.appendChild(numAdult);
    confAdult.appendChild(chargeAdult);
    Table.appendChild(confAdult);
  }
  if (localStorage.getItem("infants") !== null) {

    let confAdult = document.createElement("tr");
    let numAdult = document.createElement("td");
    let chargeAdult = document.createElement("td");

    numAdult.innerHTML = localStorage.getItem("infants");
    chargeAdult.innerHTML = "Free";
    confAdult.appendChild(numAdult);
    confAdult.appendChild(chargeAdult);
    Table.appendChild(confAdult);
  }
  if (localStorage.getItem("Finfants") !== null) {

    let confAdult = document.createElement("tr");
    let numAdult = document.createElement("td");
    let chargeAdult = document.createElement("td");

    numAdult.innerHTML = localStorage.getItem("Finfants");
    chargeAdult.innerHTML = "Free";
    confAdult.appendChild(numAdult);
    confAdult.appendChild(chargeAdult);
    Table.appendChild(confAdult);
  }
  
  if (localStorage.getItem("TotalPay") !== null) {
    let Table = document.querySelector(".confirm table");
  
    let tableData = document.createElement("tr");
    tableData.innerHTML = "<td id='high2'>Total Payable</td><td id='high2'>" + "$" + localStorage.getItem("TotalPay") + "</td>";
    Table.appendChild(tableData);
    
  }
  

}






