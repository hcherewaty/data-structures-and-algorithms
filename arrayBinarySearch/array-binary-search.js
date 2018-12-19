'use strict';

let binaryArr = module.exports = {};

binaryArr.binarySearch = (arr, val) => {
    let output = -1;
    if(typeof(arr[0]) === 'object') {
        output = null;
    }

    if(output !== null) {
        for (let i in arr) {
            if(arr[i] === val) {
                output = i;
            };
        };
    };
return output;
};