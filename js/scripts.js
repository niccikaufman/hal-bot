let responseArray = [];
let callArray = [];
let inputtedNumber;

function inputToArray(inputtedNumber) {
  parseInt(inputtedNumber);
  for (let i = 1; i <= inputtedNumber; i++)
  callArray.push(i.toString());
  console.log(callArray);
}
function passwordParser() {
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
