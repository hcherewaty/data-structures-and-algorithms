'use strict';

const LinkedList = require('./linked-list.js');

describe('insert method', () => {
    it('creates a new node', () => {
        let newList = new LinkedList();
        newList.insert('Heather');
        expect(newList).toEqual({"head": {"next": null, "value": "Heather"}});
    });
});

describe('append method', () => {
    it('creates a new node', () => {
        let newList = new LinkedList();
        newList.insert('Heather');
        newList.append('Steve');
        expect(newList).toEqual({"head": {"next": {"next": null, "value": "Steve"}, "value": "Heather"}});
    });
});

describe('insertBefore method', () => {
    it('creates a new node', () => {
        let newList = new LinkedList();
        newList.insert('Heather');
        newList.insertBefore('Steve');
        expect(newList).toEqual({"head": {"next": {"next": null, "value": "Steve"}, "value": "Heather"}});
    });
});

describe('insertAfter method', () => {
    it('creates a new node', () => {
        let newList = new LinkedList();
        newList.insert('Heather');
        newList.insertAfter('Steve');
        expect(newList).toEqual({"head": {"next": {"next": null, "value": "Steve"}, "value": "Heather"}});
    });
});

describe('kFromEnd method', () => {
    it('finds k from end', () => {
        let newList = new LinkedList();
        newList.insert('Heather');
        newList.insert('Steve');
        let find = newList.kFromEnd(1);
        expect(find).toEqual('Steve');
    })
})