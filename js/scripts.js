//back-end logic
let responseArray = [];
let callArray = [];
let inputtedNumber;

function inputToArray(inputtedNumber) {
  console.log(inputtedNumber);
  for (let i = 1; i <= inputtedNumber; i++)
  callArray.push(i.toString());
  console.log(callArray);
}
function passwordParser(callArray) {
  callArray.forEach(function(element) {
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

function clearAll() {
  responseArray = [];
  callArray = [];
  console.log(responseArray);
}

//front end
document.getElementById('landing-button').on('click', () => {
  $('#landing-page').toggle();
  $('#main-page').show();
  $('#hal-dialog-box').hide();
  $('#password').show();
});

$('#password-submit').on('click', function(event) {
  event.preventDefault();
  $('#hal-dialog-box').show();
  $('.password').toggle();
  inputtedNumber = document.getElementById("password-input").value;
  inputToArray(inputtedNumber);
  passwordParser(callArray);
  document.getElementById("hal-dialog").innerHTML = responseArray.join(' ');
})

$('#reset').on('click', function(event) {
  event.preventDefault();
  document.getElementById("hal-dialog").innerHTML = '';
  document.getElementById('password-input').value = '';
  $('#landing-page').toggle();
  $('#main-page').hide();
  $('.password').toggle();
  clearAll();
});



