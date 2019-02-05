
const TreeInt = require('./tree-intersection');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

describe('treeIntersection()', () => {
    it('accepts two parameters', () => {
        
        
        let expected = TreeInt.treeIntersection(TreeInt.t1, TreeInt.t2)
        expect(expected).toEqual(['6', '5', '15']);
    });
});
