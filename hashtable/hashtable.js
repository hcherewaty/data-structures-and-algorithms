'use strict';
const util = require('util');

class HashMap {
    constructor(size){
        this.size = size;
        this.map = new Array(size);
    }

    //turn the key (can be anything) into a hash number.
    //That number will be 0 - this.size.
    hash(key){
        //if key is a string, it is first split into individual letters (which are returned in an array by split), then reduce will take each letter in the array of letters and add it's ASCII value to the accumulator, that number will then be divided by the number of buckets in the hashtable (this.size), to hopefully get a unique place within the hashtable for this key. 
        // return key.split('').reduce( (acc, value) => acc + value.charCodeAt(0), 0) % this.size;
        let chars = key.split('');
        let accumlatedValue = chars.reduce( ( acc, value) => acc + value.charCodeAt(0), 0);
        return accumlatedValue % this.size;
    }

    //takes in both the key and value. Hashes the key and adds the key and value pair to the table.
    add(key, value) {
        let hash = this.hash(key)
        // console.log(key, hash);
        //if the hash is NOT in the HashMap
        if( !this.map[hash] ) {
            //assign this.map[hash] to an empty array
            this.map[hash] = [];
        }
        //push the key value pair into that hash value within the HashMap
        this.map[hash].push({[key]:value});
    }

    //takes in a key and returns the value from the key/value pair
    find(key) {
        let hash = this.hash(key);
        if(this.map[hash]) {
            let obj = this.map[hash][0];
            // console.log('in the obj variable', obj)
            return Object.values(obj);
        } else {
            return 'does not exist';
        }
    }

    //takes in the key and returns if the key exists in the table already.
    contains(key) {
        let hash = this.hash(key);
        if(this.map[hash]) {
            return 'This key already exists in the HashMap.'
        } else {
            return 'This key does not exist in the HashMap.'
        }
    }

    GetHash(key) {
        let hash = this.hash(key);
        if(this.map[hash]) {
            // console.log(hash)
            return hash;
        } else {
            return 'This key does not exist in the HashMap.'
        }
    }
}

let myHash = new HashMap(50);

myHash.add('Heather', 'Wife');
myHash.add('Steve', 'Husband');
myHash.add('Atlas', 'Doo');
myHash.add('Lily', 'Puss');

// console.log(myHash.find('Heather'));
// console.log(myHash.find('zebra'));

// console.log(myHash.contains('Steve'));
// console.log(myHash.contains('zebra));

console.log(myHash.GetHash('Atlas'));
// console.log(myHash.contains('zebra'));

// console.log( util.inspect(myHash, {showHidden: false, depth: null}));

