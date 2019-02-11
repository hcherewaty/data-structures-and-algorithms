'use strict';
const util = require('util')

const Graph = require('./graph');
const Node = require('./node');

describe('Graph class', () => {
    it('has a constructor', () => {
        let myGraph = new Graph();
        expect(myGraph._adjacencyList).toBeInstanceOf(Map);
    });

    it('can add a node', () => {
        let myGraph = new Graph();
        let node = new Node('Heather');

        myGraph.addNode(node);

        expect(myGraph._adjacencyList).toBeInstanceOf(Map);
        expect(myGraph._adjacencyList.size).toBe(1);
        expect(myGraph._adjacencyList.get(node)).toEqual([]);
    });

    it('can add edges', () => {
        let myGraph = new Graph();
        let nodeA = new Node(1);
        let nodeB = new Node(2);

        myGraph.addNode(nodeA);
        myGraph.addNode(nodeB);
        myGraph.addEdge(nodeA, nodeB);

        let neighborsOfA = myGraph.getNeighbors(nodeA);

        expect(neighborsOfA).toBeInstanceOf(Array);
        expect(neighborsOfA.length).toEqual(1);
        expect(neighborsOfA[0].node).toBe(nodeB);
    });

    it('can list nodes', () => {
        let myGraph = new Graph();

        myGraph.addNode('Heather');
        myGraph.addNode('Steve');
        myGraph.addNode('Atlas');
        myGraph.addNode('Lily');

        // let list = myGraph.getNodes();
        console.log( util.inspect(myGraph.getNodes(), {showHidden: false, depth: null}));

        // expect(listOfNodes).toBeInstanceOf(Object);
        expect(myGraph.getNodes()).toContain('Heather', 'Steve', 'Atlas', 'Lily');
    })
});