import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address( n ) {
  if (n.split("-").length !== 6) {
    return false;
  }

  const arrCharacters = ["A", "B", "C", "D", "E", "F"],
    arrAddress = n.split("-");
  let result = [];

  arrAddress.join("").split("").forEach(element => {
    if(arrCharacters.indexOf(element) > -1 || element > 0 || element < 9) {
      result.push(true);
    } else {
      result.push(false);
    }
  });

  return !result.includes(false);
}
