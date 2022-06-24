/**
 * @param {string} inputString
 */
const question1 = (inputString) => {
  const reversedString = inputString.split(".").reverse().join(".");
  console.log(`Entered String is ${inputString}`);
  console.log(`Reversed String is ${reversedString}`);
};
console.log("QUESTION 1");
question1("I.like.programming.quite.a.lot");

/**
 * @param {string} inputString
 */
const question2 = (inputString) => {
  inputString = inputString.toLowerCase();
  const inputStringLength = inputString.length;
  let longestString = "";
  for (let i = 0; i < inputStringLength; i++) {
    let lettersTraversed = "";
    let resultString = "";
    for (let j = i; j < inputStringLength; j++) {
      if (lettersTraversed.includes([inputString.charAt(j)])) break;
      else {
        lettersTraversed = lettersTraversed + inputString.charAt(j);
        resultString = resultString + inputString.charAt(j);
      }
    }
    if (longestString.length < resultString.length)
      longestString = resultString;
  }
  console.log(
    `Longest Unique String from ${inputString} is \'${longestString}\' of length ${longestString.length}`
  );
};
console.log("");
console.log("QUESTION 2");
question2("javascriptisbae");

/**
 * @param {string} inputParanthesis
 */
const question3 = (inputParanthesis) => {
  const stack = [];
  for (let i = 0; i < inputParanthesis.length; i++) {
    const previous = stack[stack.length - 1];
    const current = inputParanthesis[i];
    if (
      (previous && previous === "(" && current === ")") ||
      (previous === "{" && current === "}") ||
      (previous === "[" && current === "]")
    ) {
      stack.pop();
      continue;
    }
    stack.push(current);
  }
  console.log(
    `The input paranthesis ${inputParanthesis} is ${
      stack.length ? "false" : "true"
    }`
  );
};
console.log("");
console.log("QUESTION 3");
question3("{[()]}");

/**
 * @param {array} ticketArray
 * @param {number} personPosition
 */
const question4 = (ticketArray, personPosition) => {
  let spreadTicketArray = [...ticketArray];
  const spreadTicketArrayLength = spreadTicketArray.length;

  let timeTaken = 0;
  while (spreadTicketArray[personPosition] > 0) {
    for (let i = 0; i < spreadTicketArrayLength; i++) {
      if (spreadTicketArray[i]) {
        spreadTicketArray[i]--;
        timeTaken++;
      }
    }
  }
  console.log(
    `Time required for person at position ${personPosition} to buy ${ticketArray[personPosition]} ticket(s) is`,
    timeTaken
  );
};
console.log("");
console.log("QUESTION 4");
question4([5, 1, 1, 1], 0);

/**
 * @param {number} decimalNumber
 * @param {number} hexadecimalNumber
 */
const question5 = (decimalNumber, hexadecimalNumber) => {
  // Decimal to Hexadecimal.
  const decimalToHexadecimal = (decimalNumber) => {
    const hexadecimalNumber = decimalNumber.toString(16);
    console.log(`Hexadecimal Number of ${decimalNumber} is`, hexadecimalNumber);
  };
  decimalToHexadecimal(decimalNumber);

  // Hexadecimal to Decimal.
  const hexadecimalToDecimal = (hexadecimalNumber) => {
    const decimalNumber = parseInt(hexadecimalNumber, 16);
    console.log(`Decimal Number of ${hexadecimalNumber} is`, decimalNumber);
  };
  hexadecimalToDecimal(hexadecimalNumber);
};
console.log("");
console.log("QUESTION 5");
question5(456789, "6f855");
