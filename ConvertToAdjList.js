/*
 * Kyle Beitz
 */

function convertToAdjList(adjMatrix) {
    var adjList = [];                                       //Θ(1)
    for (var i = 0; i < adjMatrix.length; i++) {            //Θ(|V|)
        var tmp = [];                                       //Θ(1)
        tmp.push("[");                                      //Θ(1)
        for (var j = 0; j < adjMatrix[i].length; j++) {     //Θ(|V|)
            if (adjMatrix[i][j] === 1) {                    //Θ(1)
                tmp.push([j]);                              //Θ(1)
            }         
        }
        tmp.push("]");                                      //Θ(1)
        adjList.push(tmp);                                  //Θ(1)
    }
    return "[" + adjList.join(" , ") + "]";     
}

var m = [
 [1, 0, 1],
 [1, 1, 0],    
 [1, 0, 1],
];

var n = [
 [1, 0, 0],
 [0, 1, 0],    
 [0, 0, 1],
];

var h = [
 [0, 0, 0],
 [0, 0, 0],    
 [0, 0, 0],
 [0, 1, 0],
];

console.log(convertToAdjList(m));
console.log(convertToAdjList(n));
console.log(convertToAdjList(h));

/*
*To determine the runtime of this algorithm we can run through the code step 
*by step. There are two nested loops that consider both the row and column 
*of the adjacency matrix and if it finds a 1 it pushes that column number to 
*the adjacency list. This means the loops will iterate through all vertices 
*making it ? (|V|). Since there are two of them, we have a runtime of ?(|V2|) 
*and we can find out whether an edge is present in constant time. So, this is 
*dependent on the number of vertices and edges. The time complexity for 
*converting and adjacency list to a matrix would be ?(|V| x |E|) because we 
*would need to iterate through both the vertices and check if an edge exits.
 */