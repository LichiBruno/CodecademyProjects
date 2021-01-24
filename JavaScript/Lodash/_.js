const _ = {
  
 clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end){
    if (end === undefined){
      end = start;
      start = 0;
    } else if (start > end){
      const temporary = end
      end = start
      start = temporary
    };
    const isInRange = start <= number && number < end;
      return isInRange;
    
  },
  
  words(string){
      const words = string.split(' ');
      return words
  },

  pad(string, length){
    if (string.length >= length){
      return string;
    };
    const startPadLength = Math.floor((length - string.length) / 2);
    const endPadLength = length - string.length - startPadLength;
    const padString = ' '.repeat(startPadLength) + string + ' '.repeat(endPadLength); 
    return padString;
  },
  
  has(object, key){
    const hasValue = object[key] !== undefined;
    return hasValue
  },

  invert(object){
      const invertedObject = {}
      for(let key in object){
        invertedObject[object[key]] = key;
      }
      return invertedObject
  },

  findKey(object, predicate){
    for (let key in object){
      const value = object[key];
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue === true){
        return key;
      };
    };
      return undefined;
  },

  drop(array, n){
    if (n === undefined){
      n = 1;
    };
    const droppedArray = array.slice(n)
    return droppedArray
  },
  
  dropWhile(array, predicate){
    const dropNumber = array.findIndex((element,index) => {return !predicate(element,index,array)});
    const droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size){
    if (size === undefined){
      size = 1
    };
    const arrayChunks = []
    for (let i = 0; i<array.length; i+size){
      const arrayChunk = array.slice(i);
      arrayChunks.push(arrayChunk);
    };
    return arrayChunks
  }
};

// Do not write or modify code below this line.
module.exports = _;