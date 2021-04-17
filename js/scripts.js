//back-end logic
let responseArray = [];
let callArray = [];
let inputtedNumber;

//takes user input and pushes every integer from 1 to the inputted number to an array
function inputToArray(inputtedNumber) {
  console.log(inputtedNumber);
  for (let i = 1; i <= inputtedNumber; i++)
  callArray.push(i.toString());
  console.log(callArray);
}

//iterates through the first array
function passwordParser(callArray) {
  callArray.forEach(function(element) {
    //checks for certain numbers
    //pushes either a phrase or the original number to a new array
    if (element.includes('3')) {
      responseArray.push("I'm sorry, Dave. I'm afraid I can't do that");
    } else if (element.includes('2')) {
      responseArray.push('boop');
    } else if (element.includes('1')) {
      responseArray.push('beep');
    } else {
      responseArray.push(element)
    }
  });
  console.log(responseArray.join(' '));
}

//clears both arrays
function clearAll() {
  responseArray = [];
  callArray = [];
  console.log(responseArray);
}

//front end

//is called whenever the landing page button is clicked
$('#landing-button').on('click', function(event) {
  event.preventDefault();
  $('#landing-page').toggle();
  $('#main-page').show();
  $('#hal-dialog-box').hide();
  $('#password').show();
})

//is called whenever the main page submit button is clicked
$('#password-submit').on('click', function(event) {
  event.preventDefault();
  $('#hal-dialog-box').show();
  $('.password').toggle();
  inputtedNumber = document.getElementById("password-input").value;
  inputToArray(inputtedNumber);
  passwordParser(callArray);
  document.getElementById("hal-dialog").innerHTML = responseArray.join(' ');
})

//called whenever the password reset button is clicked
$('#reset').on('click', function(event) {
  event.preventDefault();
  //clears password input and dialog box
  document.getElementById("hal-dialog").innerHTML = '';
  document.getElementById('password-input').value = '';
  //toggles html elements
  $('#landing-page').toggle();
  $('#main-page').hide();
  $('.password').toggle();
  //clears both arrays
  clearAll();
});



