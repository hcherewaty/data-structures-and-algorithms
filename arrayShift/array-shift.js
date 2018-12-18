'use strict';

let shiftArray = module.exports = {};

shiftArray.insertShiftArray = (arr, item) => {
    
    if(arguments.length < 2){
        return null;
    }

    let result = [];
    let l = arr.length;

    for (let i = 0; i < l + 1; i++) {
        if(i < Math.ceil(l/2)) {
            result[i] = arr[i];
        }
        if(i > Math.ceil(l/2)) {
            result[i] = arr[i-1];
        }
        if(i === Math.ceil(l/2)) {
            result[i] = item;
        }
    }
    return result;
};

console.log('hello');

// console.log(insertShiftArray([1,2,3], 'x'));