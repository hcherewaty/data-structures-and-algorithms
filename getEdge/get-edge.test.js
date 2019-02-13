'use strict';
const util = require('util')

const g = require('./get-edge');
const Graph = require('../graph/graph');
const Node = require('../graph/node');

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

        let expected = g.getEdge(myGraph, arr);
        
        expect(expected).toEqual(500);

    });
});