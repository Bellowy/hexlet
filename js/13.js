// BEGIN (write your solution here)
const isPrime = (num) => {
    if (num > 0) {
      switch(num) {
        case 1: 
          return false;
        case 2: 
          return true;
        default: 
          for (let i = 2; i < num; i++) {
            if (num % i === 0) {
              return false;
            }
          }
            return true;
          }
      } else {
      return false;
    }
  }
  // END
  
  export default isPrime;
  