'use strict';
const util = require('util');
const List = require('../linkedList/linked-list.js');


class HashMap {
    constructor(size){
        this.size = size;
        this.map = new Array(size);
    }

    hash(key){
        let chars = key.split('');
        let accumlatedValue = chars.reduce( ( acc, value) => acc + value.charCodeAt(0), 0);
        return accumlatedValue % this.size;
    }

    add(key, value) {
        let hash = this.hash(key)
        if ( !this.map[hash] ) {
            this.map[hash] = new List();
        }
        this.map[hash].insert({[key]:value});
    }

    find(key) {
        let hash = this.hash(key);
        if(this.map[hash]) {
            return this.map[hash];
        } else {
            'does not exist.'
        }
    }

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

console.log(myHash.find('Heather'));
// console.log(myHash.find('zebra'));

// console.log(myHash.contains('Steve'));
// console.log(myHash.contains('zebra));

// console.log(myHash.GetHash('Atlas'));
// console.log(myHash.contains('zebra'));

// console.log( util.inspect(myHash, {showHidden: false, depth: null}));

module.exports = HashMap;