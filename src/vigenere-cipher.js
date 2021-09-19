import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct
    return this.direct
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();    
    key = key.toUpperCase();
    let count = 0,
      result = "";
  
    message.split("").forEach(element => {
      const indexElement = alphabet.indexOf(element);

      if (indexElement == -1) {
        result += element;
      } else {
        const letterKey = key[count % key.length];
        const indexKey = alphabet.indexOf(letterKey);
        let  number = indexElement + indexKey >= 26 ? (indexElement + indexKey - 26) : (indexElement + indexKey);
        count += 1;
        result += alphabet[number];
      }
    });
    
    if (!this.direct) {
      return result
      .split("")
      .reverse()
      .join("")
    } else {
      return result
    }

  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();    
    key = key.toUpperCase();
    let count = 0;
    let result = "";

    message.split("").forEach(element => {
      const indexElement = alphabet.indexOf(element);

      if (indexElement == -1) {
        result += element;
      } else {
        const letterKey = key[count % key.length];
        const indexKey = alphabet.indexOf(letterKey);
        let number = indexElement < indexKey ? (26 - indexKey + indexElement) : indexElement - indexKey;
        count += 1;
        result += alphabet[number];
      }
    });

    if (!this.direct) {
      return result
      .split("")
      .reverse()
      .join("")
    } else {
      return result
    }
  }
}
