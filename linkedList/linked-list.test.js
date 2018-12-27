'use strict';

const LinkedList = require('./linked-list.js');

describe('includes method', () => {
    it('can find values at the beginning, middle, and end of linked list', () => {
        let newList = new LinkedList();
        newList.insert('Heather');
        newList.insert('Steve');
        newList.insert('Atlas');
        newList.insert('Lily');
        expect(newList).toBeTruthy();
    });
});

describe('insert method', () => {
    it('creates a new node', () => {
        let newList = new LinkedList();
        newList.insert('Heather');
        expect(newList).toEqual({"head": {"next": null, "value": "Heather"}});
    });
});

describe('print method', () => {
    it('prints a list', () => {
        let newList = new LinkedList();
        let value = newList.print();
        expect(value).toEqual({"head": {"next": {"next": {"next": {"next": null, "value": "Lily"}, "value": "Atlas"}, "value": "Steve"}, "value": "Heather"}});
    });
});

describe('append method', () => {
    it('creates a new node', () => {
        let newList = new LinkedList();
        newList.insert('Heather');
        newList.append('Heather');
        expect(newList).toEqual({"head": {"next": null, "value": "Heather"}});
    });
});

describe('insertBefore method', () => {
    it('creates a new node', () => {
        let newList = new LinkedList();
        newList.insert('Heather');
        newList.insertBefore('Heather');
        expect(newList).toEqual({"head": {"next": null, "value": "Heather"}});
    });
});

describe('insertAfter method', () => {
    it('creates a new node', () => {
        let newList = new LinkedList();
        newList.insert('Heather');
        newList.insertAfter('Heather');
        expect(newList).toEqual({"head": {"next": null, "value": "Heather"}});
    });
});