'use strict';

let HashTable = require('./hashtable2');
let leftJoin = require('./left-join');

describe("leftJoin function", () => {
  it("should produce an array with a length", () => {
    let h1 = new HashTable();
    let h2 = new HashTable();

    h1.add("nice", "kind");
    h1.add("wrath", "anger");
    h1.add('fond', 'enamored');
    h1.add('happy', 'joyful');

    h2.add('nice', 'mean');
    h2.add('wrath', 'delight');
    h2.add('fond', 'averse');

   let arr = leftJoin(h1, h2).length;
   expect(arr).toBeTruthy();
  });

  it("should produce an array with null as a value when two keys of the hashtables don't match.", () => {
    let h1 = new HashTable();
    let h2 = new HashTable();

    h1.add("nice", "kind");
    h1.add("wrath", "anger");
    h1.add('fond', 'enamored');
    h1.add('happy', 'joyful');

    h2.add('evil', 'mean');
    h2.add('grouchy', 'delight');
    h2.add('anxious', 'averse');

   let arr = leftJoin(h1, h2);
   expect(arr[0][1]).toBeNull();
  });
});
