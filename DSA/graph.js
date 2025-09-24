class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(v1, v2) {
        if (!this.adjList.has(v1)) this.addVertex(v1);
        if (!this.adjList.has(v2)) this.addVertex(v2);
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
    }

    print() {
        for (const [vertex, edges] of this.adjList.entries()) {
            console.log(vertex, '->', edges.join(", "));
        }
    }
}

const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.print();