"use strict";

let userInput;

class InvalidNumberError extends Error {}

let getUserInput = (userInput) => {
  try {
    userInput = parseInt(prompt("Provide an even number."));
    if (isNaN(userInput)) {
      throw new InvalidNumberError("This is not a valid Number");
    } else if (userInput % 2 == 0) {
      alert("Success!");
    } else {
      alert("You entered an odd number.");
    }
  } catch (error) {
    alert(error.message);
  }
};

getUserInput();
