/*
 * Kyle Beitz
 */

/*
 * The worst case Big Θ time complexity for this is Θ(|V| + |E|) 
 * where each vertex is connected to each other because then we 
 * would have to look through every vertex and edge. SO we need 
 * to visit each vertex at least once and traverse through each edge
 * at least once but may be more.
 */

class Graph{
    constructor(){
        this.adjacencyList = [];
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }  
    depthFirstRecursive(startVertex){
        var result = [];      // array for end results
        var visited = [];     // array for vertices visited
        var adjacencyList = this.adjacencyList;  //this adjacenyList for graph
        (function dfs(vertex){  // helper function to search the graph
            if(!vertex) return null;  // if no vertex return null
            visited[vertex] = true; // marking vertex as visisted
            result.push(vertex); // pushing vertex into results array
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){  // if not visisted 
                     dfs(neighbor); // recursively look at neighbors
                }
            });
        })(startVertex);  //starting vertex
        return result;  // return results array
    }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");
//expected result A,B,D,E,C,F
console.log(g.depthFirstRecursive("A"));

let h = new Graph();
h.addVertex("A");
h.addVertex("B");
h.addVertex("C");
h.addVertex("D");
h.addVertex("E");
h.addVertex("F");
h.addVertex("G");
h.addEdge("A", "B");
h.addEdge("B", "E");
h.addEdge("A", "C");
h.addEdge("C", "D");
h.addEdge("C", "F");
h.addEdge("A", "F");
h.addEdge("F", "G");
//expected result A,B,E,C,D,F,G
console.log(h.depthFirstRecursive("A"));
