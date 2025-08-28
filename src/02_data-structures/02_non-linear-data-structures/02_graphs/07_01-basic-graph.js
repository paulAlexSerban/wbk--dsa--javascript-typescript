/**
 * Basic Graph
 * A graph is a non-linear data structure that can be looked at as a collection
 * of vertices (or nodes) potentially connected by line segments named edges.
 */

class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(node) {
        this.nodes[node] = [];
    }

    addEdge(node1, node2) {
        this.nodes[node1].push(node2);
        this.nodes[node2].push(node1);
    }

    showConnections() {
        for (const node in this.nodes) {
            let nodeConnections = this.nodes[node];
            let connections = '';
            let vertex;
            for (vertex in nodeConnections) {
                connections += nodeConnections[vertex] + ' ';
            }
            console.log(node + '-->' + connections);
        }
    }
}

let myGraph = new Graph();

myGraph.addNode('0');
myGraph.addNode('1');
myGraph.addNode('2');
myGraph.addNode('3');
myGraph.addNode('4');
myGraph.addNode('5');

myGraph.addEdge('0', '1');
myGraph.addEdge('0', '2');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '3');
myGraph.addEdge('2', '4');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '5');

myGraph.showConnections();

/**
 * Use cases of Graph
 * - Social Networks
 * - Location / Mapping
 * - Routing Algorithms
 * - Visual Hierarchy
 * - File System Optimizations
 * - EVERYWHERE!
 */
