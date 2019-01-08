'use strict';

class AnimalShelter {
    constructor() {
        this.cat = [];
        this.dog = [];
    }

    enqueue(animal) {
        if(animal === 'cat') {
            this.cat.push(animal);
        }
        if(animal === 'dog') {
            this.dog.push(animal);
        }
    }

    dequeue(pref) {
        if(pref === 'cat') {
            return this.cat.pop();
        }
        if(pref === 'dog') {
            return this.dog.pop();
        } else {return null;}
    }
}

let shelter = new AnimalShelter();
shelter.enqueue('cat');
shelter.enqueue('cat');
shelter.enqueue('cat');
shelter.dequeue('cat');
shelter.enqueue('dog');
console.log(shelter.cat);
console.log(shelter.dog);

module.exports = AnimalShelter;