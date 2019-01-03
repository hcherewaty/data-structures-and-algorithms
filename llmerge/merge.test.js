'use strict';

const LinkedList = require('../linkedList/linked-list.js');
const mergeLists = require('./ll-merge.js')

// console.log(merge);

describe('mergeLists function', () => {
    it('merges two linked lists', () => {
        let listOne = new LinkedList();
        let listTwo = new LinkedList();
        let listThree = new LinkedList();
        listOne.insert('Heather');
        listOne.insert('Steve');
        listTwo.insert('Atlas');
        listTwo.insert('Lily');
        listThree.insert('Heather');
        listThree.insert('Atlas');
        listThree.insert('Steve');
        listThree.insert('Lily');
        let merged = mergeLists(listTwo, listOne);
        let actual = listThree.head;
        expect(merged).toEqual(actual);
    });
});