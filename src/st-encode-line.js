// import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result = "";

  str.split("").forEach((element, index) => {
    let count = 0;
    for (let i = index; i <= str.length; i++ ) {
      if (result[result.length - 1] == element) {
        break;
      } else if (element == str[i]) {
        count +=1;
      } else {
        result += `${count}${element}`;
        break;
      }
    }
  })

  return result.split("").filter(i => i !== "1").join("");
}
