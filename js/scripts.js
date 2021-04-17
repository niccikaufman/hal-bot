//back-end logic
let responseArray = [];
let callArray = [];
let inputtedNumber;

function inputToArray(inputtedNumber) {
  inputtedNumber = document.getElementById('password-input');
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
    } else if (element[0] === '1') {
      responseArray.push('beep');
    } else {
      responseArray.push(element)
    }
  });
  console.log(responseArray.join(' '));
}

//front end
document.getElementById('landing-button').addEventListener('click', () => {
  $('#landing-page').toggle();
  $('#main-page').show();
});

$('#password-submit').on('click', function(event) {
  event.preventDefault();
  inputToArray(inputtedNumber);
  passwordParser(callArray);
  $("#hal-dialog").text(responseArray.join(' '));
})