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

    breadthFirst(startNode){
        let queue = [startNode];
        let currentNode;
        let visitedNodes = new Set();

        while(queue.length){
            currentNode = queue.pop();
            visitedNodes.add(currentNode);

            let neighbors = this.getNeighbors(currentNode);

            for(let neighbor of neighbors) {
                console.log(neighbor.node);
                let neighborNode = neighbor.node;

                if(visitedNodes.has(neighborNode)){
                    continue;
                } else {
                    visitedNodes.add(neighborNode)
                }
                queue.unshift(neighborNode)
            }
        }
        return visitedNodes;
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

// console.log( util.inspect(myGraph, {showHidden: false, depth: null}));
// console.log(myGraph.getNeighbors('San Diego'));
// console.log( util.inspect(myGraph.getNodes(), {showHidden: false, depth: null}));
// console.log(myGraph.size);

// ++++++++++++++++++++++++++++++
// BFS
// ++++++++++++++++++++++++++++++

let g = new Graph();

g.addNode('A');
g.addNode('B');
g.addNode('C');
g.addNode('D');
g.addNode('E');
g.addNode('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D','F');
g.addEdge('E', 'F');

//     A
//    / \
//   B   C
//   |   |
//   D - E
//   \  /
//     F

console.log(g.breadthFirst('A'));

module.exports = Graph;