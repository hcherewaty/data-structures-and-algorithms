
'use strict';
const LinkedList = require('../linkedList/linked-list.js');

class HashTable{
  constructor(size=53){
    this.keyMap = new Array(size);
    this.size = 53;
  }

  getHash(key){
  let total = 0;
  let prime = 31;
  for(let i = 0; i < Math.min(key.length, 100); i++){
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + prime + value) % this.keyMap.length;
  } 
  return total;
  }

  add(key,value){
    let index = this.getHash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = new LinkedList();
    }
    this.keyMap[index].append({[key]:value});
   
  }

  search(lili, key){
    let current = lili.head;
    let object = null;
    while(current){
      if(Object.keys(current.value)[0] === key){
        return (object = current);
      }
      current = current.next;
    }
    return object;
  }
  
  get(key){
    let index = this.getHash(key);
    let chain = this.keyMap[index];
    if(chain){
      return(this.search(chain, key) ? this.search(chain, key) : 'No key found');
    }
    return 'No key found';
  }


  contains(key){
    let index = this.getHash(key);
    let chain = this.keyMap[index];
    if(chain){
      return(this.search(chain, key) ? true : false );
    }
    return false;
  }
}

module.exports = HashTable;