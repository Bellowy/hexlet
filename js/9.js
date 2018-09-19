const sequenceSum = (begin, end) => {
    // BEGIN (write your solution here)
    if (begin === end) {
      return begin;
    } else if (begin <= end) {
      return begin + sequenceSum(begin + 1, end, 1);
    } else {
        return NaN;
    }
    // END
  };
  
  export default sequenceSum;
  