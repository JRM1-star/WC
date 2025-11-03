function checkNumber(input) {
  try {
    // Convert input to a number
    const number = Number(input);

    // Check if it's a valid number between 5 and 10
    if (isNaN(number)) {
      throw "Input is not a number!";
    } else if (number < 5 || number > 10) {
      throw "Number must be between 5 and 10!";
    } else {
      console.log("Valid number:", number);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

// Example usage
checkNumber(7);    // Valid
checkNumber(3);    // Error: Number must be between 5 and 10!
checkNumber("abc"); // Error: Input is not a number!
