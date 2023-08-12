let x = document.getElementById("cal");
let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let timeType = "";

if (localStorage.getItem("tym") !== null) {
  timeType = localStorage.getItem("tym");
}
let selectedButtons = [];
if (localStorage.getItem("timeBtn") !== null) {
  selectedButtons = localStorage.getItem("timeBtn").split(", ");
  document.getElementById("tym").innerText = localStorage.getItem("timeBtn");
}
let Guest = document.getElementById("guestNum");
/* if(Guest){ */


let tot = 0;

function guestValid(chargeKey, chargeDisplay, numberKey, numberDisplay, boxCreate) {
  if (localStorage.getItem(chargeKey) !== null) {
    if (chargeDisplay != "") {
      console.log(chargeDisplay);
      document.getElementById(chargeDisplay).innerText = "$" + localStorage.getItem(chargeKey);
    }
    let guest = parseInt(localStorage.getItem(numberKey));
    let adultCh = parseInt(localStorage.getItem(chargeKey));
    document.getElementById(boxCreate).style.display = "block";
    let numofFadult = document.getElementById(numberDisplay);
    if (numofFadult) {
      document.getElementById(numberDisplay).innerHTML = guest;
    }
    return [guest, adultCh];
  } else{
    return [0, 0];
  }
}

let foreignA =  guestValid("fadcharge", "foradult", "adultF", "fanum", "gt2");
let fadult_guest = foreignA[0];
let fadult = foreignA[1];

/* if (localStorage.getItem("adcharge") !== null) {
  console.log("sdfgh");
  document.getElementById("sladult").innerText = "$" + localStorage.getItem("adcharge");
  adult_guest = parseInt(localStorage.getItem("Adult"));
  let numofAdult= document.getElementById("anum");
  adult = parseInt(localStorage.getItem("adcharge"));
  document.getElementById("gt1").style.display = "block";
  if(numofAdult){
  document.getElementById("anum").innerHTML = adult_guest;
  }
} */

foreignA= guestValid("adcharge", "sladult", "Adult", "anum", "gt1");
let adult_guest = foreignA[0];
let adult = foreignA[1];

/* if (localStorage.getItem("cslchild") !== null) {
  document.getElementById("slchild").innerText = "$" + localStorage.getItem("cslchild");
  child_guest = parseInt(localStorage.getItem("childLK"));
  child = parseInt(localStorage.getItem("cslchild"));
  document.getElementById("cnum").innerHTML = child_guest;
  document.getElementById("gt3").style.display = "block";
} */

foreignA= guestValid("cslchild", "slchild", "childLK", "cnum", "gt3");
let child_guest = foreignA[0];
let child = foreignA[1];

/* if (localStorage.getItem("fccharge") !== null) {
  document.getElementById("forchild").innerText = "$" + localStorage.getItem("fccharge");
  fchild_guest = parseInt(localStorage.getItem("childForin"));
  fchild = parseInt(localStorage.getItem("fccharge"));
  document.getElementById("fcnum").innerHTML = fchild_guest;
  document.getElementById("gt4").style.display = "block";
} */
foreignA= guestValid("fccharge", "forchild", "childForin", "fcnum", "gt4");
let fchild_guest = foreignA[0];
let fchild = foreignA[1];


/* if (localStorage.getItem("infants") !== null) {
  infant = parseInt(localStorage.getItem("infants"));
  document.getElementById("inum").innerHTML = infant;
  document.getElementById("gt5").style.display = "block";
} */
let infant= guestValid("infants", "", "infants", "inum", "gt5")[0];

/* 
if (localStorage.getItem("Finfants") !== null) {
  infant = parseInt(localStorage.getItem("Finfants"));
  document.getElementById("finum").innerHTML = Finfant;
  document.getElementById("gt6").style.display = "block";
} */

let finfant = guestValid("finfants", "", "finfants", "finum", "gt6")[0];


let totalSum = adult + fadult + child + fchild;
localStorage.setItem("TotalPay", totalSum);
document.getElementById("total").innerHTML = "$" + totalSum;

if (localStorage.getItem("TotalPay") !== null) {
  tot = parseInt(localStorage.getItem("TotalPay"));
  document.getElementById("total").innerHTML = "$" + tot;
}
/* } */


let totalHours = 0;
if (localStorage.getItem("hrs") !== null) {
  totalHours = localStorage.getItem("hrs");
}

const durationElement = document.getElementById("duration");
if (localStorage.getItem("hrs") !== null) {
  durationElement.innerText = localStorage.getItem("hrs") + " hours";
}

console.log(localStorage.getItem("timeBtn"));
document.getElementById("date").innerText = localStorage.getItem("dateNow");


let monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function updateCalendar() {
  x.innerHTML = "";

  let date = new Date(year, month, 1);
  let day = date.getDay();
  date = new Date(year, month + 1, 0);
  let numdays = date.getDate();

  dateSelect = new Date();


  // Create a row to display day names
  let dayRow = document.createElement("tr");
  for (let i = 0; i < 7; i++) {
    let dayCell = document.createElement("td");
    dayCell.textContent = dayNames[i];
    dayRow.appendChild(dayCell);
  }
  x.appendChild(dayRow);

  let row = document.createElement("tr");
  let k = 0;

  for (let j = 0; j < 7; j++) {
    let cell = document.createElement("td");
    if (j >= day) {
      k++;
      let addDay = new Date(year, month, k);
      if (addDay < dateSelect) {
        cell.innerHTML = "<input type='radio' id='" + k + "' name='select' disabled><label for='" + k + "'>" + k + "</label>";
      } else {
        cell.innerHTML = "<input type='radio' id='" + k + "' name='select'><label for='" + k + "'>" + k + "</label>";
      }
    }
    row.appendChild(cell);
  }

  x.appendChild(row);

  let rem = numdays - k;
  let weeks = Math.floor(rem / 7);

  for (let z = 0; z < weeks; z++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      let cell = document.createElement("td");
      k++;
      let addDay = new Date(year, month, k);
      if (addDay < dateSelect) {
        cell.innerHTML = "<input type='radio' id='" + k + "' name='select' disabled><label for='" + k + "'>" + k + "</label>";
      } else {
        cell.innerHTML = "<input type='radio' id='" + k + "' name='select'><label for='" + k + "'>" + k + "</label>";
      }
      row.appendChild(cell);
    }
    x.appendChild(row);
  }

  row = document.createElement("tr");
  for (let j = 0; j < 7; j++) {
    let cell = document.createElement("td");
    if (k < numdays) {
      k++;
      let addDay = new Date(year, month, k);
      if (addDay < dateSelect) {
        cell.innerHTML = "<input type='radio' id='" + k + "' name='select' disabled><label for='" + k + "'>" + k + "</label>";
      } else {
        cell.innerHTML = "<input type='radio' id='" + k + "' name='select'><label for='" + k + "'>" + k + "</label>";
      }
    }
    row.appendChild(cell);
  }
  x.appendChild(row);

  // Output the current month name
  document.getElementById("MonthNow").innerHTML = monthNames[month];

  let radioButtons = document.querySelectorAll("input[type='radio']");
  radioButtons.forEach((radio) => {
    radio.addEventListener("click", function () {
      let selectedDate = (month + 1) + "/" + this.id + "/" + year;
      localStorage.setItem("dateNow", selectedDate);
      document.getElementById("date").innerText = selectedDate;
    });
  });
}


updateCalendar();

function showNextMonth() {
  month = (month + 1) % 12
  if (month == 0) {
    year++;
  }
  updateCalendar();
}

function showPrevMonth() {
  if (month >= 1) {
    month--;
  }
  else {
    month = 11;
  }
  if (month == 11) {
    year--;
  }
  updateCalendar();
}


document.getElementById("prev").addEventListener("click", showPrevMonth);
document.getElementById("next").addEventListener("click", showNextMonth);




/* Guest JS */

/* Adult */




function SumOf() {
  totalSum = adult + fadult + child + fchild;
  document.getElementById("total").innerHTML = "$" + totalSum;
}
function incrementAdultGuests() {
  ++adult_guest;
  localStorage.setItem("Adult", adult_guest);
  document.getElementById("anum").innerHTML = adult_guest;
  if (timeType == "peak") {
    adult += 6;
    localStorage.setItem("adcharge", adult);
    document.getElementById("sladult").innerHTML = "$" + adult;

  }
  else {
    adult += 4;
    localStorage.setItem("adcharge", adult);
    document.getElementById("sladult").innerHTML = "$" + adult;

  }

  SumOf();
  localStorage.setItem("TotalPay", totalSum);
  document.getElementById("gt1").style.display = "block";
}

document.getElementById("aplus").addEventListener("click", incrementAdultGuests);




function incrementFAdultGuests() {
  ++fadult_guest;
  localStorage.setItem("adultF", fadult_guest);
  document.getElementById("fanum").innerHTML = fadult_guest;
  if (timeType == "peak") {
    fadult += 13;
    document.getElementById("foradult").innerHTML = "$" + fadult;
  }
  else {
    fadult += 10;

    document.getElementById("foradult").innerHTML = "$" + fadult;

  }
  localStorage.setItem("fadcharge", fadult);
  SumOf();
  localStorage.setItem("TotalPay", totalSum);
  document.getElementById("gt2").style.display = "block";
}

document.getElementById("faplus").addEventListener("click", incrementFAdultGuests);



function decrementAdultGuests() {
  if (adult_guest > 0) {
    adult_guest--;
    localStorage.setItem("Adult", adult_guest);
    if (timeType == "peak") {
      adult -= 6;
    }
    else {
      adult -= 4;
    }
    localStorage.setItem("adcharge", adult);
    SumOf();
    localStorage.setItem("TotalPay", totalSum);
    document.getElementById("anum").innerHTML = adult_guest;
    document.getElementById("sladult").innerHTML = "$" + adult;
  }
}

document.getElementById("aminus").addEventListener("click", decrementAdultGuests);

function decrementFAdultGuests() {
  if (fadult_guest > 0) {
    fadult_guest--;
    localStorage.setItem("adultF", fadult_guest);
    if (timeType == "peak") {
      fadult -= 13;
    }
    else {
      fadult -= 10;
    }
    localStorage.setItem("fadcharge", fadult);
    SumOf();
    localStorage.setItem("TotalPay", totalSum);
    document.getElementById("fanum").innerHTML = fadult_guest;
    document.getElementById("foradult").innerHTML = "$" + fadult;
  }

}

document.getElementById("faminus").addEventListener("click", decrementFAdultGuests);


/* Child */



function incrementChildGuests() {
  ++child_guest;
  document.getElementById("cnum").innerHTML = child_guest;
  localStorage.setItem("childLK", child_guest);
  if (timeType == "peak") {
    child += 3
    document.getElementById("slchild").innerHTML = "$" + child;
  }
  else {
    child += 2;
    document.getElementById("slchild").innerHTML = "$" + child;
  }
  localStorage.setItem("cslchild", child);
  SumOf();
  localStorage.setItem("TotalPay", totalSum);
  document.getElementById("gt3").style.display = "block";
}

document.getElementById("cplus").addEventListener("click", incrementChildGuests);


/* Foreign Child */


function incrementFChildGuests() {
  ++fchild_guest;
  localStorage.setItem("childForin", fchild_guest);
  document.getElementById("fcnum").innerHTML = fchild_guest;
  if (timeType == "peak") {
    fchild += 8;
    document.getElementById("forchild").innerHTML = "$" + fchild;
  }
  else {
    fchild += 5;
    document.getElementById("forchild").innerHTML = "$" + fchild;
  }
  localStorage.setItem("fccharge", fchild);
  SumOf();
  localStorage.setItem("TotalPay", totalSum);
  document.getElementById("gt4").style.display = "block";
}

document.getElementById("fcplus").addEventListener("click", incrementFChildGuests);

function decrementFChildGuests() {
  if (fchild_guest > 0) {
    fchild_guest--;
    localStorage.setItem("childForin", fchild_guest);
    if (timeType == "peak") {
      fchild -= 8;
    }
    else {
      fchild -= 5;
    }
    localStorage.setItem("fccharge", fchild);
    SumOf();
    localStorage.setItem("TotalPay", totalSum);
    document.getElementById("fcnum").innerHTML = fchild_guest;
    document.getElementById("forchild").innerHTML = "$" + fchild;
  }
}

document.getElementById("fcminus").addEventListener("click", decrementFChildGuests);

function decrementChildGuests() {
  if (child_guest > 0) {
    child_guest--;
    localStorage.setItem("childLK", child_guest);
    if (timeType == "peak") {
      child -= 3;
    }
    else {
      child -= 2;
    }
    localStorage.setItem("cslchild", child);
    SumOf();
    localStorage.setItem("TotalPay", totalSum);
    document.getElementById("cnum").innerHTML = child_guest;
    document.getElementById("slchild").innerHTML = "$" + child;
  }

}

document.getElementById("cminus").addEventListener("click", decrementChildGuests);

/* Infant */




function incrementInfantGuests() {
  infant++;
  localStorage.setItem("infants", infant);
  document.getElementById("inum").innerHTML = infant;
  document.getElementById("slinf").innerHTML = "Free";
  document.getElementById("gt5").style.display = "block";
}

document.getElementById("iplus").addEventListener("click", incrementInfantGuests);





function incrementFInfantGuests() {
  finfant++;
  localStorage.setItem("Finfants", finfant);
  document.getElementById("finum").innerHTML = finfant;
  document.getElementById("forinf").innerHTML = "Free";
  document.getElementById("gt6").style.display = "block";
}

document.getElementById("fiplus").addEventListener("click", incrementFInfantGuests);

function decrementInfantGuests() {
  if (infant_guest > 0) {
    infant_guest--;
    document.getElementById("inum").innerHTML = infant_guest;
  }
}

document.getElementById("iminus").addEventListener("click", decrementInfantGuests);

function decrementFInfantGuests() {
  if (finfant_guest > 0) {
    finfant_guest--;
    document.getElementById("finum").innerHTML = finfant_guest;
  }
}

document.getElementById("fiminus").addEventListener("click", decrementFInfantGuests);


/* Summary Table */



function handleClick(event) {
  const buttonValue = event.target.textContent;
  console.log(buttonValue);

  timeType = event.target.id;
  localStorage.setItem("tym", timeType);

  if (!selectedButtons.includes(buttonValue)) {
    selectedButtons.push(buttonValue);
  }

  totalHours++;
  localStorage.setItem("hrs", totalHours);
  updateSelectedTime();
}

function updateSelectedTime() {
  const timeElement = document.getElementById("tym");
  localStorage.setItem("timeBtn", selectedButtons);
  timeElement.innerHTML = selectedButtons.join(", ");
  localStorage.setItem("hrs", totalHours);
  durationElement.innerText = totalHours + " hours";


}


/* Payment JS */

/* const form = document.getElementById('form');
const cardNumber = document.getElementById('number');
const expiryDate = document.getElementById('exp');
const cvc = document.getElementById('cvc');
const nameOnCard = document.getElementById('name');

if(form){
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
   const expiryDateValue = expiryDate.value;
   const cvcValue = cvc.value.trim();
   const nameOnCardValue = nameOnCard.value.trim();


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


}; */














