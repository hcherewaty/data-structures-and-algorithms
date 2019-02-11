'use strict';
const util = require('util');

class Graph {
    constructor(){
        this._adjacencyList = new Map();
        this.size = 0;
    }

    //add method
    addNode(node) {
        //adds a key to the adjacency list with the name of the node (vertex) and set it's value to be an empty array
        this._adjacencyList.set(node, []);
        this.size++;
    }

    addEdge(startNode, endNode, weight = 0){
        if( !this._adjacencyList.has(startNode) || !this._adjacencyList.has(endNode) ) {
            throw new Error('__ERROR__invalid nodes');
        }
        let adjacenies = this._adjacencyList.get(startNode);

        adjacenies.push({
            node: endNode,
            weight,
        });
    }

    getNodes(){
        return this._adjacencyList.keys();
    }

    getNeighbors(node){
        if( !this._adjacencyList.has(node) ) {
            throw new Error('__ERROR__ invalid node');
        }

        return [...this._adjacencyList.get(node)];
    }

    size(){
        return this.size;
    }

};



let myGraph = new Graph()
myGraph.addNode('Tokyo');
myGraph.addNode('San Francisco');
myGraph.addNode('San Diego');
myGraph.addNode('Phoenix');
myGraph.addEdge('San Francisco', 'San Diego');
myGraph.addEdge('San Diego', 'Phoenix', 355);
myGraph.addNode('Phoenix');

console.log( util.inspect(myGraph, {showHidden: false, depth: null}));
// console.log(myGraph.getNeighbors('San Diego'));
// console.log( util.inspect(myGraph.getNodes(), {showHidden: false, depth: null}));
// console.log(myGraph.size);

module.exports = Graph;