import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const NATURAL_ALG_OF_TWO = 0.693;

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
  // throw new NotImplementedError('Not implemented');
  let num = parseFloat(sampleActivity);
  let up = Math.log(num / MODERN_ACTIVITY);
  let down = NATURAL_ALG_OF_TWO / HALF_LIFE_PERIOD;
  let yo = Math.abs(up) / down.toFixed(12); 
  let result = Math.ceil(yo);
  return (typeof(sampleActivity) == 'string' && sampleActivity > 0 && typeof(num) == 'number' && isNaN(num) == false && num < 15) ? result : false;
}
