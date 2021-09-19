import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(word1, word2) {
  let str2 = word2,
  count = 0;

  word1.split("").forEach(element => {
    const index = str2.split("").indexOf(element);
    if (index > -1) {
      count += 1;
      str2 = `${str2.slice(0,index)}${str2.slice(index+1)}}`;
    }
  })

  return count;
}
