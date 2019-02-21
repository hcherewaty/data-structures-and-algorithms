'use strict';

function radixSort (nums) {
    let myHash = new HashMap(1024);

    let counter = 0;

    for(let i = 0; i <nums.length; i++){
        if(nums[i] > counter){
            counter = nums[i];
        }
    }

    for(let j = 0; j < counter; j++){
        myHash.add(counter[i]);
    }
    return myHash.map;
}