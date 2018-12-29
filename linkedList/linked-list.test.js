'use strict';

const LinkedList = require('./linked-list.js');

describe('insert method', () => {
    it('creates a new node', () => {
        let newList = new LinkedList();
        newList.insert('Heather');
        expect(newList).toEqual({"head": {"next": null, "value": "Heather"}});
    });
});

// describe('print method', () => {
//     it('prints a list', () => {
//         let newList = new LinkedList();
//         let value = newList.print();
//         expect(value).toEqual({"head": {"next": {"next": {"next": {"next": null, "value": "Lily"}, "value": "Atlas"}, "value": "Steve"}, "value": "Heather"}});
//     });
// });

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
        newList.insert('Atlas');
        newList.insert('Lily');
        let find = newList.kFromEnd(2);
        expect(find).toEqual({"head": {"next": {"next": null, "value": "Steve"}, "value": "Heather"}});
    })
})