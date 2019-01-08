'use strict';

const Animals = require('./fifo-animal-shelter.js');

describe('enqueue', () => {
    it('adds animal to either cat or dog array', () => {
        let shelter = new Animals();
        shelter.enqueue('cat');
        expect(shelter.cat[0]).toEqual('cat');
    });
});

describe('dequeue', () => {
    it('removes first animal from either cat or dog array', () => {
        let shelter = new Animals();
        shelter.enqueue('cat');
        shelter.enqueue('cat');
        shelter.dequeue('cat');
        expect(shelter.cat[0]).toEqual('cat');
    });
});

