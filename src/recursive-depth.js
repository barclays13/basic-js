import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
        let depth = 1;
        let max = 1;
        arr.forEach(element => {
            if (Array.isArray(element)) {
                depth = this.calculateDepth(element) + 1;
                  if (max < depth) {
                    max = depth;
                  }
            }
        })
        return max;
    }
    return 1;
  }
}
