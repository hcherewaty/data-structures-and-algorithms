'use strict';

const HMap = require('./hashtable-ll');
const util = require('util');

let str = 'i like to meow to the moon'

function repeatedWord(str){
    let splitStr = str.split(' ');

    let myHash = new HMap(100);

    for(let i = 0; i < splitStr.length; i ++){
      if(myHash.contains(splitStr[i])){
        return splitStr[i+1];
      } else {
        myHash.add(splitStr[i]);
      }
    }
  }

  console.log(repeatedWord(str))

  module.exports = {repeatedWord};