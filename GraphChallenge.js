/**
 * Function: GraphChallenge
 * ------------------------
 * Given an array representing nodes and edges of an undirected graph,
 * return the shortest path from the first node to the last node.
 * If no path exists, return -1.
 *
 * Example:
 * ["4","A","B","C","D","A-B","B-D","B-C","C-D"] → "A-B-D"
 *
 * @param {string[]} strArr - Graph representation
 * @returns {string|number} - Shortest path string or -1
 */
function GraphChallenge(strArr) {
    const N = parseInt(strArr[0], 10);
    const nodes = strArr.slice(1, N + 1);  // node names
    const edges = strArr.slice(N + 1);     // connections

    const start = nodes[0];
    const end = nodes[nodes.length - 1];

    // Build adjacency list
    const graph = {};
    nodes.forEach(node => graph[node] = []);

    edges.forEach(edge => {
        const [a, b] = edge.split("-");
        graph[a].push(b);
        graph[b].push(a);
    });
    console.log(graph);

    // BFS setup
    const queue = [start];
    const visited = new Set([start]);
    const parent = {};

    // BFS loop
    while (queue.length > 0) {
        const current = queue.shift();

        if (current === end) break; // found destination

        for (let neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                parent[neighbor] = current; // track path
                queue.push(neighbor);
            }
        }
    }
    console.log(parent);
    console.log(visited);
    console.log(visited.has(end));

    // Reconstruct path if destination reached
    if (!visited.has(end)) return -1;

    const path = [];
    let node = end;
    while (node !== undefined) {
        path.push(node);
        node = parent[node];
    }
    path.reverse();

    return path.join("-");
}

// -------------------------------
// Example Test Cases
// -------------------------------
console.log(GraphChallenge(["4","A","B","C","D","A-B","B-D","B-C","C-D"])); 
// "A-B-D"

// console.log(GraphChallenge(["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"])); 
// "A-E-D-F-G"

// console.log(GraphChallenge(["3","A","B","C"])); 
// -1 (no connections)
