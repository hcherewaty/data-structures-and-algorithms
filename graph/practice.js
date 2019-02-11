'use strict';
const util = require('util');

class Graph {
    constructor(){
        this._adjacencyList = {}
    }

    addVertex(vertex){
        if(!this._adjacencyList[vertex]){
            this._adjacencyList[vertex] = [];
        }
    }
}

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('San Francisco');

console.log( util.inspect(g, {showHidden: false, depth: null}));