/*
Filename: ComplexCode.js

Description: This code demonstrates a complex algorithm for finding the shortest path in a given graph using Dijkstra's algorithm.

Note: This is a simplified implementation, and may not handle large graphs efficiently. For practical purposes, consider using existing libraries.

*/

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = {};
  }

  addEdge(node1, node2, weight) {
    this.edges[node1][node2] = weight;
    this.edges[node2][node1] = weight;
  }

  dijkstra(startNode) {
    const dist = {};
    const visited = {};
    const previous = {};
    const unvisited = [];

    // Initialize distances and unvisited nodes
    for (const node of this.nodes) {
      dist[node] = Infinity;
      previous[node] = null;
      unvisited.push(node);
    }

    dist[startNode] = 0;

    while (unvisited.length > 0) {
      const currentNode = this.getMinDistanceNode(dist, unvisited);
      unvisited.splice(unvisited.indexOf(currentNode), 1);
      visited[currentNode] = true;

      for (const neighbor in this.edges[currentNode]) {
        const distanceToNeighbor = dist[currentNode] + this.edges[currentNode][neighbor];

        if (distanceToNeighbor < dist[neighbor]) {
          dist[neighbor] = distanceToNeighbor;
          previous[neighbor] = currentNode;
        }
      }
    }

    return {
      dist,
      previous,
    };
  }

  getMinDistanceNode(dist, unvisited) {
    let minDistance = Infinity;
    let minNode = null;

    for (const node of unvisited) {
      if (dist[node] < minDistance) {
        minDistance = dist[node];
        minNode = node;
      }
    }

    return minNode;
  }
}

// Example usage

// Create a graph
const graph = new Graph();

// Add nodes
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

// Add edges
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

// Find shortest path
const { dist, previous } = graph.dijkstra('A');

console.log('Shortest distances:');
console.log(dist);
console.log('Previous nodes:');
console.log(previous);
