const Map = require('./hashtable-ll');

describe('HashMap', () => {
    it('can hash a key', () => {
        let map = new Map(50);
        let hashedValue = map.hash('Heather');
        expect(hashedValue).toEqual(5);
    });

    it('can add a linked list', () => {
        let map = new Map(50);
        let hashedValue = map.hash('Woof'); 
        expect(hashedValue).toBeDefined();
    });

    // it('can find a value', () => {
    //     let map = new Map(50);
    //     let findValue = map.find('Woof')
    //     expect(findValue).toEqual('Woof');
    // });

    it('returns statement indicating whether or not a given key exists in the hash map', () => {
        let map = new Map(50);
        let hashedValue = map.hash('Heather')
        // let addedValue = map.add('Heather')
        let containedVal = map.contains(hashedValue);
        expect(containedVal).toEqual('This key already exists in the HashMap.')
    })
});