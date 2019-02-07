'use strict';

const HMap = require('./hashtable2');
// const List = require('../linkedList/linked-list.js');
const util = require('util');


function leftJoin(hash1, hash2){
  let container = [];
  for(let i = 0; i < hash1.size; i++){
    //   console.log(hash1)
    if(hash1.keyMap[i]){    
      let current = hash1.keyMap[i].head;
      let bucket = [];
      while(current){
        bucket.push(current.value);
        current = current.next;
        if(hash2.contains(bucket[0])){
          bucket.push(hash2.keyMap[i].value);
        //   console.log(hash2.keyMap[i])
        } else {
          bucket.push(null);
        }
        container.push(bucket);
      }
    }
  }
  return container;
}

let h1 = new HMap(50);
let h2 = new HMap(50);

h1.add('nice', 'kind');
h1.add('wrath', 'anger');
h1.add('fond', 'enamored');
h1.add('happy', 'joyful');

h2.add('nice', 'mean');
h2.add('wrath', 'delight');
h2.add('fond', 'averse');
h2.add('');

console.log(leftJoin(h1, h2));

module.exports = leftJoin;