import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const solution = (str) => {
  let collection = str.split(' '),
    space = '',
    word = '';
  for (let i = 0; i < collection.length; i++) {
    let temp = [];
    if (collection[i] !== "") {
      for (let j = 0; j < collection[i].length; j++) {
        if (j === 0)
          temp.push(collection[i][j].toUpperCase());
        else
          temp.push(collection[i][j]);
      }
      space = (i + 1 === collection.length) ? '' : ' ';
      word += temp.join('') + space;
    } else {
      word += ' ';
    }
  }
  return word;
}

export default solution;
// END
