/**
 * Graph Traversing
 * There are two main ways of traversing a graph:
 * - Breadth-first Search (BFS)
 * - Depth-first Search (DFS)
 */
// Adjacency matrix
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
};

/**
 * Depth-first Search (DFS)
 * The function should accept a starting node
 * Create a stack to help use keep track of vertices (use a list/array)
 * Create a list to store the end result, to be returned at the very end
 * Create an object to store visited vertices
 * Add the starting vertex to the stack, and mark it visited
 * While the stack has something in it:
 * - Pop the next vertex from the stack
 * - If that vertex hasn't been visited yet:
 *  - Mark it as visited
 * - Add it to the result list
 * - Push all of its neighbours into the stack
 * Return the result array
 *
 * @param {*} graph
 * @param {*} startNode
 */
function DFS(graph, startNode) {
    let stack = []; // To keep track of nodes to visit
    let visited = {}; // To keep track of visited nodes

    stack.push(startNode);

    while (stack.length) {
        let currentNode = stack.pop();

        // If we've already visited this node, skip it
        if (visited[currentNode]) continue;

        console.log(currentNode);

        visited[currentNode] = true;

        let neighbours = graph[currentNode];

        for (let neighbour of neighbours) {
            stack.push(neighbour);
        }
    }
}

DFS(graph, 'A'); // A -> C -> F -> E -> B -> D

/**
 * Breadth-first Search (BFS)
 * The function should accept a starting node
 * Create a queue (you can use an array) and place the starting vertex in it
 * Create an array to store the nodes visited
 * Create an object to store nodes visited
 * Mark the starting vertex as visited
 * Loop as long as there is anything in the queue
 * - Remove the first vertex from the queue and push it into the array that stores nodes visited
 * - Loop over each vertex in the adjacency list for the vertex you are visiting
 * - If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
 * Once you have finished looping, return the array of visited nodes
 *
 * @param {*} graph
 * @param {*} startNode
 * @returns
 * @memberof Graph
 */

function BFS(graph, startNode) {
    let queue = []; // To keep track of nodes to visit
    let visited = {}; // To keep track of visited nodes

    queue.push(startNode);

    while (queue.length) {
        let currentNode = queue.shift();

        // If we've already visited this node, skip it
        if (visited[currentNode]) continue;

        console.log(currentNode);

        visited[currentNode] = true;

        let neighbours = graph[currentNode];

        for (let neighbour of neighbours) {
            queue.push(neighbour);
        }
    }
}

BFS(graph, 'A'); // A -> B -> C -> D -> E -> F
