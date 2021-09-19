import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 export default  function repeater( str, options) {

  str = String(str);
  let {repeatTimes = 1, 
    separator= "+", 
    addition = "", 
    additionRepeatTimes = 1,
    additionSeparator = "|"} = options;

  repeatTimes = (typeof repeatTimes === "number") ? repeatTimes : +(repeatTimes);
  separator = (typeof separator === "string") ? separator : String(separator);
  addition = (typeof addition === "string") ? addition : String(addition);   
  additionRepeatTimes = (typeof additionRepeatTimes === "number") ? additionRepeatTimes : +(additionRepeatTimes); 
  additionSeparator = (typeof additionSeparator === "string") ? additionSeparator : String(additionSeparator);

  const getString = (string, repeat, separator) => {
    if (!repeat) return ""; 
    let result = ``;
    for(let i = 1; i <= repeat; i++) {
       i < repeat ? result += `${string}${separator}`: result += string;
    }
    return result;
  }

  return getString(str + getString(addition, additionRepeatTimes, additionSeparator), repeatTimes, separator);
}