'use strict';

const HMap = require('./hashtable-ll');
const util = require('util');

// let newHash = new HMap(100);

let str = 'meow meow woof woof woof';



// function repeatedWord(str) {
// let tracker = {};

// let splitStr = str.split(' ');

//     for(let i = 0; i < splitStr.length; i++) {
//         // console.log(splitStr[i]);
//         tracker[splitStr[i]] = (tracker[splitStr[i]] || 0) + 1;
//         // console.log(tracker);
//     }
//     // console.log(tracker)
//     let newTracker = Object.values(tracker)
//     // console.log(newTracker);
//     let max = newTracker[0];
//     for(let j = 1; j < newTracker.length; j++) {
        
//         if(newTracker[j] > max)
//         max = newTracker[j];
//     }
//     return max;
// }

// console.log(repeatedWord(str));

let str2 = 'meow purr woof caw moo woof';

function repeatedWord(str) {
    let splitStr = str.split(' ');
    let hMap =  new HMap(100);

    for(let i = 0; i < splitStr.length; i++){
        if(hMap.contains(splitStr[i])) {
            return splitStr[i + 1]
        } else {
            hMap.add(splitStr[i])
        }
    } 
}

console.log(repeatedWord(str2));
