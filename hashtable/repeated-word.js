'use strict';

const HMap = require('./hashtable-ll');
const util = require('util');

let str = 'Once upon a time, there was a brave princess who...'

function repeatedWord(str){
    let splitStr = str.split(' ');

    let myHash = new HMap(100);

    for(let i = 0; i < splitStr.length; i++){
      if(myHash.contains(splitStr[i])){
        return splitStr[i];
      } else {
        myHash.add(splitStr[i]);
      }
    }
  }

  console.log(repeatedWord(str))

  module.exports = {repeatedWord};