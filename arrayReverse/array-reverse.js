'use strict';


function reverseArray(arr) {
    let result = [];
    for (let i = 0; i <arr.length; i++) {
        result.unshift(arr[i]);
    }
    return result;
}