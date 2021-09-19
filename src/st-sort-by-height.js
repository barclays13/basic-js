import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight( arr ) {

  const result = [];
  let count = 0;

  const numbers = arr.filter(element => {
    if (element !== -1) {
      return element;
    }
  });

  numbers.sort((a, b) => a - b);

  arr.forEach(element => {
    if (element === -1) {
      result.push(element);
    } else {
      result.push(numbers[count]);
      count += 1;
    }
  });

  return result;
}
