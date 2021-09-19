import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arrNumbers = [];
    
  n = String(n);
  for (let i = 0; i < n.length; i++) { 
    arrNumbers.push(+`${n.slice(0,i)}${n.slice(i+1)}`);
  }

  return Math.max.apply(null, arrNumbers);
}


