import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  
  const resultArr = [...arr];

  for (let i = 0; i < arr.length; i++) {

      if (arr[i] === "--discard-next") {
          resultArr[i] = false;
          if(arr[i + 1]) {
              resultArr[i + 1] = false;
          } 
      } else if (arr[i] === "--discard-prev") {
          resultArr[i] = false;
          if(arr[i - 1]) {
              resultArr[i - 1] = false;
          }
      } else if (arr[i] === "--double-next") {
          resultArr[i] = false;
          if(arr[i + 1]) {
              resultArr[i] = arr[i + 1];
          } 
      } else if (arr[i] === "--double-prev") {
          resultArr[i] = false;
             if (arr[i - 2] == "--discard-next") {
              resultArr[i - 1]  = false;
          } else if (arr[i - 1]) {
              resultArr[i] = arr[i - 1];
          }
      } else if (!arr[i]) {
          resultArr[i] = false;
      }
    }

    return resultArr.filter(element => element !== false);
}
