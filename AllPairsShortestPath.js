/*
 * Kyle Beitz
 */

function allPairsShortestPaths(graph){
var dist = [];
for (var l = 0; l < graph.length; l++){ 
    dist.push([]);
   for( var m = 0; m < graph.length; m++){
        dist[l].push(Infinity);          
   }
}
for (var h = 0; h < graph.length; h++) { 
  for (var p = 0; p < graph.length; p++) {
    if (h === p) {
        dist[h][p] = 0;
    } else if(graph[h][p] > 0) {      
        dist[h][p] = graph[h][p]; 
    } 
  }
}     
for (var k = 0; k < graph.length; k++) {
  for (var i = 0; i < graph.length; i++) {
    for (var j = 0; j < graph.length; j++) {
      if (dist[i][j] > dist[i][k] + dist[k][j]) { 
        dist[i][j] = dist[i][k] + dist[k][j]; 
      }
    }
  }
} 
  return dist;
}
         
var m = [
[1, 3, 0, 5],
[3, 0, 0, 1],
[0, 0, 0, 2],
[5, 1, 2, 0]
];

var h = [
[1, 0, 0, 5],
[0, 0, 0, 0],
[2, 0, 0, 2],
[5, 0, 2, 0]
];

var b = [
[1]
];

console.log(JSON.stringify(allPairsShortestPaths(m)));
console.log("[" + allPairsShortestPaths(h) + "]");
console.log(JSON.stringify(allPairsShortestPaths(b)));

/*
 * This allPairsShortestPaths algorithm has a Θ time complexity of
 * Θ(|V^3|) because the lower order terms and constants can be ignored. 
 * Basically, the triple nested loop dominates the other terms and the 
 * number of edges becomes number of vertices squared and becomes another
 * lower order term we can ignore because in the worst case we have a 
 * completly connected graph. This is also polynomial.
 * 
 * Initialize a |V| x |V| matrix dist to ∞                             Θ(|V^2|)
 * for each v ∈ V, dist[v][v] = 0                                        Θ(|V|)
 * for each edge (u,v) = e ∈ E, dist[v][v] = weight((u,v))               Θ(|E|)       
 * for each vertex k ∈ V                                              Θ(|V|^3|)        
 *  - for each vertix i ∈ V
 *  - for each vertex j ∈ V
 *      if dist[i][j] > dist[i][k] + dist[k][j]:                           Θ(1)
 *         dist[i][j] = dist[i][k] + dist[k][j]   
 */


