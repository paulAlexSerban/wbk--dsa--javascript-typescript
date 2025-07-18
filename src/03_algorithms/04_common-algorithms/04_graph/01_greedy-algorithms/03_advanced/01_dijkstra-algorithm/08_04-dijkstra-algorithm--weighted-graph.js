class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
    }
    Dijkstra(start, end) {
        let visited = {};
        let toVisited = [end, start];
        let previous = {};
        let arrayKeys = Object.keys(this.adjacencyList);
        //filling the array
        arrayKeys.forEach((item) => {
            if (item === start) {
                previous[item] = { node: start, weight: 0 };
            } else {
                previous[item] = Infinity;
            }
        });

        while (toVisited.length !== 0) {
            let node = toVisited.pop();

            let loop = this.adjacencyList[node];

            for (let i = 0; i < loop.length; i++) {
                console.log(loop[i]);
                if (!visited[loop[i].node] || previous[loop[i].node].weight + loop[i].weight < previous[node].weight) {
                    //to check if the loop[i].node is already in the toVisited node
                    if (previous[loop[i].node] === Infinity) {
                        toVisited.push(loop[i].node);
                        previous[loop[i].node] = { node: node, weight: loop[i].weight + previous[node].weight };
                    } else {
                        if (
                            previous[loop[i].node].weight !== undefined &&
                            previous[loop[i].node].weight + loop[i].weight < previous[node].weight
                        ) {
                            previous[node] = {
                                node: loop[i].node,
                                weight: loop[i].weight + previous[loop[i].node].weight,
                            };
                        }
                    } //adding the node to be visited in case of it was not visited before

                    //and also the weight is less than before
                }
            }

            visited[node] = true;
        }

        let returnArray = [];
        let temp = previous[end].node;

        returnArray.unshift(end);
        //looping through
        while (temp !== start) {
            returnArray.unshift(temp);
            temp = previous[temp].node;
        }
        returnArray.unshift(start);

        let totalDistance = previous[end].weight;
        return returnArray;
    }
}

var g = new WeightedGraph();

g.addVertex('A');
g.addVertex('Z');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('H');
g.addVertex('Q');
g.addVertex('G');

g.addEdge('A', 'Z', 7);
g.addEdge('A', 'C', 8);

g.addEdge('Z', 'Q', 2);

g.addEdge('C', 'G', 4);

g.addEdge('D', 'Q', 8);

g.addEdge('E', 'H', 1);

g.addEdge('H', 'Q', 3);

g.addEdge('Q', 'C', 6);

g.addEdge('G', 'Q', 9);

g.Dijkstra('A', 'E'); // ["A", "Z", "Q", "H", "E"]
g.Dijkstra('A', 'Q'); // ["A", "Z", "Q"]
g.Dijkstra('A', 'G'); // ["A", "C", "G"]
g.Dijkstra('A', 'D'); // ["A", "Z", "Q", "D"]
