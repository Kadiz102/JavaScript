class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];  //check to see if the vertex is already in the adj list, if not add it.
    }
    addEdge(vertex1,vertex2, weight){  //add an edge between vertex1 and vertex2 with a weight for the priority queue
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    Dijkstra(start, finish){
        var nodes = new PriorityQueue();
        var distances = {};   //to keep track of the distances
        var tracking = {};  //to track what the previous vertex was
        var path = [] //to return the shartest path
        var smallest; //keep track of the smallest distance
     
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            tracking[vertex] = null;
        }

        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(tracking[smallest]){
                    path.push(smallest);
                    smallest = tracking[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    var nextNode = this.adjacencyList[smallest][neighbor];
                    var candidate = distances[smallest] + nextNode.weight;
                    var nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){  
                        distances[nextNeighbor] = candidate;  //update the distance amount 
                        tracking[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


alert(graph.Dijkstra("A", "E"));

// ["A", "C", "D", "F", "E"]