// BEGIN (write your solution here)
const smallestDivisor = (num) => {
    let divisor = 2;
  
    if (num === 1) {
      return 1;
    } else if (num === 0 || num < 0) {
      return NaN;
    } else {
      if (num % divisor === 0) {
        return divisor 
      } else {
        while (num % divisor !== 0) {
          divisor = divisor + 1;
        }
        return divisor;
      }
    }
  }
  // END
  
  export default smallestDivisor;
  