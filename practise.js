class ShiftCipher {
  constructor(number) {
    this.number = number;
  }
  encrypt(value) {
    let newString = value.toLowerCase();
    let someString = '';
    let i = 0;
    while (i < newString.length) {
      if (newString.charCodeAt(i) >= 97 && newString.charCodeAt(i) <= 122) {
        let bigNumber = newString.charCodeAt(i) + this.number;
        if (bigNumber > 122) {
          someString += String.fromCharCode((this.number - (122 - newString.charCodeAt(i))) + 96);
        } else {
          someString += String.fromCharCode(newString.charCodeAt(i) + this.number);
        }     
        i++;
      } else {
        someString += String.fromCharCode(newString.charCodeAt(i));
        i++;
      }
    }
    console.log(someString.toUpperCase());
  }
  decrypt(value) {
    let newString = value.toLowerCase();
    let someString = '';
    let i = 0;
    while (i < newString.length) {
      if (newString.charCodeAt(i) >= 97 && newString.charCodeAt(i) <= 122) {
        let smallNumber = newString.charCodeAt(i) - this.number;
        if (smallNumber < 97) {
          someString += String.fromCharCode(123 - (97 - smallNumber));
        } else {
          someString += String.fromCharCode(newString.charCodeAt(i) - this.number);
        }     
        i++;
      } else {
        someString += String.fromCharCode(newString.charCodeAt(i));
        i++;
      }
    }
    console.log(someString.toLowerCase());
  }
}

const cipher = new ShiftCipher(2);
cipher.encrypt("I love to codz!"); // returns 'K NQXG VQ EQFG!'
cipher.decrypt("K <3 OA RWRRA"); // returns 'i <3 my puppy'
const letter = new ShiftCipher(1);
letter.encrypt("Z"); //return 'A'