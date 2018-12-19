'use strict';

let binaryArr = module.exports = {};

binaryArr.binarySearch = (arr, val) => {
let output = -1;

for (let i in arr) {
    if(arr[i] === val) {
        output = i;
    };
};
return output;
};