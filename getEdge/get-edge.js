'use strict';

const Graph = require('../graph/graph');



function getEdge(graph, arr) {
    let counter = 0;
    let current = arr[0];
    let neighbors;
    let exists = false;

    for(let i = 1; i < arr.length; i++){

        neighbors = myGraph.getNeighbors(current);
        // console.log(neighbors);
        let next = arr[i]

        for(let neighbor of neighbors){
           if(neighbor.value === next) {
               current = neighbor;
               console.log(neighbors)
               console.log(neighbor.value)
               counter += neighbor.value;

           }
        }
    }
    return counter;
}
    


let myGraph = new Graph()
myGraph.addNode('London');
myGraph.addNode('Seattle');
myGraph.addNode('Atlantic City');
myGraph.addNode('Dallas');
myGraph.addNode('Portland');
myGraph.addEdge('London', 'Seattle', 500);
myGraph.addEdge('Seattle', 'Atlantic City', 100);
myGraph.addEdge('Seattle', 'Dallas', 300);
myGraph.addEdge('Dallas', 'Portland', 200);

let arr = ['London', 'Seattle', 'Dallas'];

console.log(getEdge(myGraph, arr));

module.exports = getEdge;