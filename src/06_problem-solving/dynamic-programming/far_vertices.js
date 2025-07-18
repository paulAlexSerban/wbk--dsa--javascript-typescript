/**
 * Far Vertices
 *
 * You are given a tree that has N vertices and N-1 edges. Your task is to mark as small number of vertices as possible,
 * such that, the maximum distance between two unmarked vertices is less than or equal to K. Output this value. Distance
 * between two vertices i and j is defined as the minimum number of edges you have to pass in order to reach vertex i
 * from vertex j.
 *
 * Input Format
 * The first line of input contains two integers N and K. The next N-1 lines contain two integers (ui,vi) each,
 * where 1 <= ui,vi <= N. Each of these lines specifies an edge.
 * N is no more than 100. K is less than N.
 * Output Format
 * A single integer, the answer to the problem.
 *
 * Sample Input:
 * 5 2
 * 1 2
 * 1 3
 * 3 4
 * 3 5
 *
 * Sample Output:
 * 1
 *
 * Sample Input:
 * 5 3
 * 1 2
 * 1 3
 * 3 4
 * 3 5
 *
 * Sample Output:
 * 0
 *
 * Explanation:
 * In the first case you have to mark at least 3 vertices, and in the second case you don't need to mark any vertices.
 */

/*
 * Complete the 'farVertices' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. 2D_INTEGER_ARRAY edges
 */

/**
 * BEST SOLUTION and WORKING
 */

(() => {
    function findArrayIntersection(arr1, arr2) {
        const set1 = new Set(arr1);
        const set2 = new Set(arr2);
        return [...set1].filter((item) => set2.has(item));
    }

    function processConnections(cMap, k, previousV, currentV, endVertices) {
        const currentVisited = new Set([currentV]);

        function dfs(currentV, depth) {
            if (depth === 0) {
                endVertices.add(currentV);
                return currentVisited;
            }

            for (const neighbor of cMap[currentV]) {
                if (neighbor === previousV || currentVisited.has(neighbor)) {
                    continue;
                }
                currentVisited.add(neighbor);
                dfs(neighbor, depth - 1);
            }

            return currentVisited;
        }

        dfs(currentV, k);
        return currentVisited;
    }

    function calculateMaxPathing(cMap, k) {
        const maxPathingForVertices = {};
        const endVertices = new Set();

        for (const vertex of Object.keys(cMap)) {
            const allVertices = processConnections(cMap, k, null, parseInt(vertex, 10), endVertices);
            maxPathingForVertices[vertex] = { allVertices: [...allVertices], endVertices: [...endVertices] };
            endVertices.clear();
        }

        return maxPathingForVertices;
    }

    function farVertices(n, k, edges) {
        const verticeConnectionMap = {};

        // Create a map of vertex connections
        for (const [vertex1, vertex2] of edges) {
            verticeConnectionMap[vertex1] = verticeConnectionMap[vertex1] || [];
            verticeConnectionMap[vertex1].push(vertex2);

            verticeConnectionMap[vertex2] = verticeConnectionMap[vertex2] || [];
            verticeConnectionMap[vertex2].push(vertex1);
        }

        const maxPathingForVertices = calculateMaxPathing(verticeConnectionMap, k);
        let biggestConnection = 0;

        for (const vertex of Object.keys(maxPathingForVertices)) {
            let mostConnected = [];
            for (const endVertex of maxPathingForVertices[vertex].endVertices) {
                const intersection = findArrayIntersection(
                    maxPathingForVertices[vertex].allVertices,
                    maxPathingForVertices[endVertex].allVertices
                );
                if (intersection.length > mostConnected.length) {
                    mostConnected = intersection;
                }
            }
            biggestConnection = Math.max(biggestConnection, mostConnected.length);
        }

        return biggestConnection === 0 ? 0 : n - biggestConnection;
    }

    console.log('GOOD SOLUTION');
    console.log(
        farVertices(5, 2, [
            [1, 2],
            [1, 3],
            [3, 4],
            [3, 5],
        ])
    ); // Output: 1
    console.log(
        farVertices(5, 3, [
            [1, 2],
            [1, 3],
            [3, 4],
            [3, 5],
        ])
    ); // Output: 0
})();

/**
 * WRONG SOLUTION
 */
(() => {
    const farVertices = (n, k, edges) => {
        const adjList = new Map();
        for (let i = 1; i <= n; i++) adjList.set(i, []);
        edges.forEach(([u, v]) => {
            adjList.get(u).push(v);
            adjList.get(v).push(u);
        });

        let result = n;

        const dfs = (v, parent) => {
            let dp = new Array(n + 1).fill(k + 1);
            dp[0] = 0;

            for (const u of adjList.get(v)) {
                if (u === parent) {
                    continue;
                }

                const subtreeDp = dfs(u, v);
                const tempDp = dp.slice();

                for (let i = 0; i < dp.length; i++) {
                    for (let j = 0; j < subtreeDp.length && i + j + 1 < dp.length; j++) {
                        tempDp[Math.max(i, j + 1)] = Math.min(
                            tempDp[Math.max(i, j + 1)],
                            Math.max(dp[i], subtreeDp[j])
                        );
                    }
                }
                dp = tempDp;
            }
            dp.forEach((value, index) => {
                if (value <= k) {
                    result = Math.min(result, index);
                }
            });
            return dp;
        };
        dfs(1, -1);
        return result;
    };

    console.log('WRONG SOLUTION');
    console.log(
        farVertices(5, 2, [
            [1, 2],
            [1, 3],
            [3, 4],
            [3, 5],
        ])
    ); // Output: 1
    console.log(
        farVertices(5, 3, [
            [1, 2],
            [1, 3],
            [3, 4],
            [3, 5],
        ])
    ); // Output: 0
})();

/**
 * WRONG SOLUTION
 */
(() => {
    const farVertices = (n, k, edges) => {
        const adjList = new Array(n + 1).fill(null).map(() => []);
        for (const [u, v] of edges) {
            adjList[u].push(v);
            adjList[v].push(u);
        }

        const dp = new Array(n + 1).fill(null).map(() => new Array(k + 1).fill(0));
        const size = new Array(n + 1).fill(1);

        const dfs1 = (v, p) => {
            for (const u of adjList[v]) {
                if (u === p) {
                    continue;
                }
                dfs1(u, v);
                size[v] += size[u];
            }

            for (let i = 0; i <= k; i++) dp[v][i] = i;
            for (const u of adjList[v]) {
                if (u === p) {
                    continue;
                }
                const temp = new Array(k + 1).fill(0);
                for (let i = 0; i <= k; i++) temp[i] = dp[v][i];
                for (let i = 0; i <= k; i++) {
                    let val = i;
                    for (let j = 0; j <= k && j + i + 1 <= k; j++) {
                        val = Math.max(val, j + 1 + size[u]);
                        temp[Math.max(i, j + 1)] = Math.min(temp[Math.max(i, j + 1)], Math.max(dp[u][j], val));
                    }
                }
                for (let i = 0; i <= k; i++) dp[v][i] = temp[i];
            }
        };

        const dfs2 = (v, p, val) => {
            const temp = new Array(k + 1).fill(0);
            for (let i = 0; i <= k; i++) temp[i] = Math.max(i, val);
            for (const u of adjList[v]) {
                if (u === p) {
                    continue;
                }
                for (let i = 0; i <= k; i++) {
                    temp[i] = Math.max(temp[i], dp[v][i]);
                    if (i > 0) {
                        temp[i] = Math.max(temp[i], temp[i - 1] + 1);
                    }
                }
                let best = k;
                for (let i = k; i >= 0; i--) {
                    best = Math.min(best, Math.max(i, temp[i]));
                    if (i < k) {
                        dp[u][i + 1] = Math.min(dp[u][i + 1], best + 1);
                    }
                }
            }
            for (const u of adjList[v]) {
                if (u === p) {
                    continue;
                }
                dfs2(u, v, Math.max(val, dp[v][k] + 1));
            }
        };

        dfs1(1, 0);
        dfs2(1, 0, k);
        return dp[1][k];
    };

    console.log(
        farVertices(5, 2, [
            [1, 2],
            [1, 3],
            [3, 4],
            [3, 5],
        ])
    ); // Output: 1
})();

/**
 * WRONG SOLUTION
 */
(() => {
    const farVertices = (n, k, edges) => {
        const graph = new Map();
        for (let i = 1; i <= n; i++) {
            graph.set(i, []);
        }
        for (let [u, v] of edges) {
            graph.get(u).push(v);
            graph.get(v).push(u);
        }
        let max = 0;

        /**
         * DFS
         * Depth First Search
         *
         * @param {*} node
         * @param {*} parent
         * @param {*} depth
         */
        const dfs = (node, parent, depth) => {
            max = Math.max(max, depth);
            for (let neighbor of graph.get(node)) {
                if (neighbor !== parent) {
                    dfs(neighbor, node, depth + 1);
                }
            }
        };

        dfs(1, null, 0);
        return max <= k ? 1 : 2;
    };

    const n = 5;
    const k = 2;
    const edges = [
        [1, 2],
        [1, 3],
        [3, 4],
        [3, 5],
    ];
    console.log('WRONG SOLUTION');
    console.log(farVertices(n, k, edges)); // 1
})();

/**
 * WRONG SOLUTION
 */
(() => {
    /**
     * Build Graph
     * - Initialize graph with N vertices
     * - Since the graph is undirected, add an edge both ways
     * @param {*} n
     * @param {*} edges
     * @returns
     */
    const buildGraph = (n, edges) => {
        const graph = new Map();
        for (let i = 1; i <= n; i++) graph.set(i, []); // Initialize graph with N vertices

        for (const [u, v] of edges) {
            graph.get(u).push(v);
            graph.get(v).push(u); // Since the graph is undirected, add an edge both ways
        }

        return graph;
    };

    /**
     * Far Vertices
     * - Build a graph representation of the tree
     * - Set to store marked vertices
     * @param {*} n
     * @param {*} k
     * @param {*} edges
     * @returns
     */
    const farVertices = (n, k, edges) => {
        const graph = buildGraph(n, edges); // Build a graph representation of the tree
        let marked = new Set(); // Set to store marked vertices

        /**
         * DFS
         * - Loop through all neighbors of the current node
         * - Skip the parent node
         * - Update the maxDepth
         * @param {*} node
         * @param {*} parent
         * @returns
         */
        const dfs = (node, parent) => {
            let maxDepth = [node]; // To store the maximum depth from the current node

            for (const neighbor of graph.get(node)) {
                // Loop through all neighbors of the current node
                if (neighbor === parent) {
                    continue;
                } // Skip the parent node
                const depth = dfs(neighbor, node);
                if (depth.length + 1 > k) {
                    marked.add(node);
                } else if (depth.length + 1 > maxDepth.length) {
                    maxDepth = [node, ...depth];
                } // Update the maxDepth
            }

            return maxDepth;
        };

        dfs(1, -1); // Start DFS from the root node, which is 1 in this case
        return marked.size;
    };

    // Example
    const n = 5;
    const k = 2;
    const edges = [
        [1, 2],
        [1, 3],
        [3, 4],
        [3, 5],
    ];
    console.log('WRONG SOLUTION');
    console.log(farVertices(n, k, edges)); // 1
})();
