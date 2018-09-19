// BEGIN (write your solution here)
const square = (num) => {
    if (num === 0) {
      return 0;
    } else {
      num = num * num;
      return num;
    }
  }
  const sumOfSquares = (num1, num2) => {
    if (num1, num2 === 0) {
      return 0;
    } else {
      let getAnswer = square(num1) + square(num2);
      return getAnswer
    }
  }
  const squareSumOfSquares = (num1, num2) => {
    if (num1, num2 === 0) {
      return 0;
    } else {
      let getAnswer = square(num1) + square(num2);
      let getAnswer2 = square(getAnswer);
      return getAnswer2
    }
  }
  // END
  
  export default {
    square,
    sumOfSquares,
    squareSumOfSquares,
  };
  