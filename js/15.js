import square from './square';

// BEGIN (write your solution here)
import getTriangleArea from './myMathModule';

const solution = (n) => {
  if (n <= 0) {
    return 0;
  } else {
    let result = getTriangleArea(n, (n*n)/2);
    return result;
  }
}

export default solution;
// END


//myMathModule 
export const getTrianglePerimeter = (a, b, c) => a + b + c;

// BEGIN (write your solution here)
const getTriangleArea = (h,b) => {
  if (h,b <= 0) {
    return 0;
  } else {
    let result = 1/2 * h * b;
    return result;
  }
}

export default getTriangleArea;
// END
