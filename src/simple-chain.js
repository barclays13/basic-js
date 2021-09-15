import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink( position ) {
    if (position < 1 || position > this.chainArr.length || typeof position !== "number" ) {
      this.chainArr = [];
      throw new Error("You can\'t remove incorrect link!"); 
    }

    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr = this.chainArr.reverse();
    return this;
  },
  finishChain() {
    const result = this.chainArr.join('~~');
    this.chainArr = [];
    return result;
  }
};
