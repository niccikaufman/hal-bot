# hal-bot

#### _Hal Bot_

#### By _**Nicci Kaufman**_

## Technologies Used

* _HTML/CSS_
* _Javascript_

## Description
_A simple bot à la 2001: A Space Odyssey that responds to any numerical password entered by the user_

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser._


## Known Bugs

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

## Contact Information

_niccikaufman@gmail.com_

## Test-Driven Development (TDD) Documentation
Describe: inputToArray();
Test: "It returns an array listing all numbers ranging from 1 to the inputted number."
Code: inputToArray("10")
Expected Output: ["1", "2","3","4","5","6","7","8","9","10"]

Describe: passwordParser();

Test: "It recognizes a single number and returns a certain phrase."
Code: passwordParser("1");
Expected Output: "beep"

Code: passwordParser("2");
Expected Output: "boop"

Code: passwordParser("3");
Expected Output: "I'm sorry, Dave. I'm afraid I can't do that."

Test: "It recognizes a number larger than or equal to 4 and returns that number."
Code: passwordParser("4");
Expected Output: "4"

Test: "If a number includes more than one of the mutated numbers, it will return only the phrase of the larger number"
Code: passwordParser("13");
Expected Output: "I'm sorry, Dave. I'm afraid I can't do that."