import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats( domains ) {
  const result = {};

  const arr = domains.map(element => {
    element = element.split(".").reverse().map(item => `.${item}`);
    let str = '';

    for(let i = 0; i < element.length; i++) {
      str += element[i];
      if (!Object.keys(result).includes(str)) {
        result[str] = 0;
      }
    }
    return str;
  })

  for (let key in result) {
    let count = 0;
    arr.forEach(element => {
      if (element.indexOf(key) !== -1) count += 1;
    })
    result[key] = count;
  }

  return result;
}
