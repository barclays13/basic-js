import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum( matrix ) {
  let count = 0;
  
  matrix.forEach((element, index) => {
    for (let i = 0; i < element.length; i++) {
      if (index == 0) {
        count += element[i];
      } else if (matrix[index - 1][i] !== 0) {
        count += element[i];
      } 
    } 
  });
  return count;
}