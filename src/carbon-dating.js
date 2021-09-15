import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  const log2 = 0.693;

  if (
    typeof sampleActivity !== "string" || 
    sampleActivity > MODERN_ACTIVITY  ||
    sampleActivity <= 0 ||
    sampleActivity === "" ||
    sampleActivity === null
  ) return false;

  const result =  Math.ceil(Math.log((MODERN_ACTIVITY / +sampleActivity))/ (log2 / HALF_LIFE_PERIOD));

  if (isNaN(result)) return false;
  return result;
}
