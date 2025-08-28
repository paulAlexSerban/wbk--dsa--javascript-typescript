/**
 * Dijkstra's Algorithm
 * Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks.
 * It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.
 */

class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    /**
     * Enqueue
     * This method accepts a value and a priority, makes a new node, and puts it in the right spot based off of its priority
     * The priority queue should be sorted based on priority, so from highest priority to lowest priority (numbers)
     * @param {*} element
     * @param {*} element
     */
    enqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    }

    /**
     * Dequeue
     * This method removes the first element from the priority queue
     * @returns
     */
    dequeue() {
        return this.collection.shift();
    }

    /**
     * Size
     * This method returns the length of the priority queue
     * @returns
     */
    size() {
        return this.collection.length;
    }

    /**
     * Is Empty
     * This method returns true if the priority queue is empty
     * @returns {boolean}
     */
    isEmpty() {
        return this.collection.length === 0;
    }
}

/**
 * Dijkstra
 * This function should accept a starting and ending vertex
 * Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
 * After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
 * Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
 * Start looping as long as there is anything in the priority queue
 * - dequeue a vertex from the priority queue
 * - If that vertex is the same as the ending vertex - we are done!
 * - Otherwise loop through each value in the adjacency list at that vertex
 * - Calculate the distance to that vertex from the starting vertex
 * - If the distance is less than what is currently stored in our distances object
 * - - update the distances object with new lower distance
 * - - update the previous object to contain that vertex
 * - - enqueue the vertex with the total distance from the start node
 * @param {*} graph
 * @param {*} start
 * @returns
 */
// Dijkstra's algorithm function
function dijkstra(graph, start) {
    // Initialize an object to store the shortest distance from the start vertex to each vertex in the graph
    let distances = {};
    // For each vertex in the graph
    for (let vertex in graph) {
        // Set initial distance to each vertex as Infinity
        distances[vertex] = Infinity;
    }
    // The distance from the start vertex to itself is 0
    distances[start] = 0;

    // Create a priority queue to store the vertices to visit
    let pq = new PriorityQueue();
    // Add the start vertex to the queue with a priority of 0
    pq.enqueue([start, 0]);

    // While the priority queue is not empty
    while (!pq.isEmpty()) {
        // Remove the vertex with the smallest distance from the queue
        let shortestStep = pq.dequeue();
        // This vertex is now the current vertex
        let currentNode = shortestStep[0];

        // For each neighboring vertex of the current vertex
        for (let neighbor in graph[currentNode]) {
            // Calculate the distance to the neighbor through the current vertex
            let distanceToNeighbor = graph[currentNode][neighbor];
            // The total distance is the sum of the distance to the current vertex and the distance from the current vertex to the neighbor
            let totalDistance = distanceToNeighbor + shortestStep[1];

            // If the total distance is less than the currently known shortest distance to the neighbor
            if (totalDistance < distances[neighbor]) {
                // Update the shortest distance to the neighbor
                distances[neighbor] = totalDistance;
                // Add the neighbor to the queue with the updated distance as the priority
                pq.enqueue([neighbor, totalDistance]);
            }
        }
    }
    // After visiting all vertices, return the shortest distances from the start vertex to all vertices
    return distances;
}

let graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { C: 1, B: 5 },
};

console.log(dijkstra(graph, 'A'));
