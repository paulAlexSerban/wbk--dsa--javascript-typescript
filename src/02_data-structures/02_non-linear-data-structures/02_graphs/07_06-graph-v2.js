class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vtx1, vtx2) {
        if (
            this.adjacencyList[vtx1] &&
            this.adjacencyList[vtx2] &&
            this.adjacencyList[vtx1].includes(vtx2) &&
            this.adjacencyList[vtx2].includes(vtx1)
        ) {
            this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter((vtx) => vtx !== vtx2);
            this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter((vtx) => vtx !== vtx1);
        }
    }

    removeVertex(vtx) {
        if (this.adjacencyList[vtx]) {
            for (let v of this.adjacencyList[vtx]) {
                this.removeEdge(v, vtx);
            }
            delete this.adjacencyList[vtx];
        }
    }

    depthFirstSearch(start, visited = []) {
        if (visited.indexOf(start) !== -1) return;
        visited.push(start);
        for (let neighborVertex of this.adjacencyList[start]) this.depthFirstSearch(neighborVertex, visited);
        return visited;
    }

    breadthFirstSearch(start) {
        let stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (stack.length) {
            currentVertex = stack.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
}

var graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

graph.removeEdge('B', 'A');
graph.removeEdge('C', 'D');

console.log(graph.adjacencyList['A']); //  // contains 'C'
console.log(graph.adjacencyList['B']); // contains 'D'
console.log(graph.adjacencyList['C']); // contains 'A'
console.log(graph.adjacencyList['D']); // contains 'B'

var graph = new Graph();

graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');

graph.addEdge('S', 'P');
graph.addEdge('S', 'U');

graph.addEdge('P', 'X');
graph.addEdge('U', 'X');

graph.addEdge('P', 'Q');
graph.addEdge('U', 'V');

graph.addEdge('X', 'Q');
graph.addEdge('X', 'Y');
graph.addEdge('X', 'V');

graph.addEdge('Q', 'R');
graph.addEdge('Y', 'R');

graph.addEdge('Y', 'W');
graph.addEdge('V', 'W');

graph.addEdge('R', 'T');
graph.addEdge('W', 'T');

console.log(graph.depthFirstSearch('S'));
