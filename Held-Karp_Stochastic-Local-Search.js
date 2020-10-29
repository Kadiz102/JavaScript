/*
 * Kyle Beitz
 * COSC 3020
 * Assignment 3
 * W05276756
 */

//********** Held-Karp Algorithm Memoization **********//  

function heldKarp(cities, start, dist, routes){                                 // function that takes an array, a starting index
    var min;                                                                    // a distance matrix and an array
    var arr = [];                                                             
    var results = [];
    var otherCity = cities[0];                                                  // Initialize otherCities to cities index [0]
    var path;                                                                   // string object
    var stringStart;                                                            // string value of paths
    
    if (cities.length === 2){                                                   // base case: if length is 2
       if ( otherCity === start){                                               // return the distance from start
            otherCity = cities[1];                                              // to otherCity
        }     
        return dist[start][otherCity];          
        
    } else {
        for (var k = 0; k < cities.length; k++){   
            if(cities[k] !== start){                                            // removing start from temp arr
            arr.push(cities[k]);                                                // creating temp arr to use for recursion
            }
        }
        
        path = JSON.stringify(arr);
        stringStart = JSON.stringify(start);                                    // creating unique lookup for sub problems
        path = path.concat(stringStart);                                        // acts like a dictionary
                                                                                // Stringify the path and give it a value at the end
        if (routes[path] === undefined ){                                       // if we haven't encountered this before calculate it
            for(var i = 0; i < cities.length; i++){                             // return the minimum from recursive call            
                if(cities[i] !== start){           
                    min = heldKarp(arr,cities[i],dist,routes) + dist[start][cities[i]]; 
                    results.push(min);                                    
                }
            }           
            routes[path] = Math.min(...results);                                // set the value of that path to min
        } else {
                                                                                // if already encountered just return the min from cache
        }              
    }   
    return routes[path];
}

function tsp_hk(matrix){                                                        // function takes a distance matrix, calculates the number of cities
    let routes = [];                                                            // calculates the starting point and initializes cache
    var arr = [];  
    for(var i = 0; i < matrix.length; i++){
        arr.push(i);
    }  
    for(var j = 0; j < matrix.length; j++){
       return heldKarp(arr,j,matrix,routes);
    }
}

//************ 2-Opt Traveling Salesman ************//


function twoOptSwap(route, i, k) {                     
    var first = [];                                                             // function that takes an arry with two 
    var second = [];                                                            // indexes to swap
    var third = [];                                                             // cities 1 to i-1 stay in the order they are
    first = route.splice(0,i);                                                  // cities i to k are reversed
    second = route.splice(0, k-i + 1);                                          // cities k+1 to n stay in the order they are
    third = route;
    route = first.concat(second.reverse()).concat(third);
    return route;
}

function tsp_ls(route) {
    var arr = [];
    var min;
    var max;
    var dist = Number.MAX_VALUE;
    
    for(var h = 0; h < route.length; h++){                                      
        var i = (Math.random()*100);                                            // choose i at random
        var k = (Math.random()*100);                                            // choose k at random
    
        if (i < k){                                                             // i needs to be < k 
            min = i;                                                            // so I set criteria incase
            max = k;                                                            // k is < i
        } else {
            min = k;
            max = i;
        }
        
        for(var i = 0; i < route.length; i++){
            arr.push(i);                                                        // fill array
         }   
         
         arr = shuffle(arr);                                                    // randomize array to start with

        for (var p = 0; p < route.length; p++) {                                // decided that I should only try 
            var temp = 0;                                                       // however long the distance matrix is
            arr = twoOptSwap(arr,min,max);                                      // before stopping. I felt that 
                                                                                // if I tried at least as many cities
            for (var m = 0; m < arr.length - 1; m++) {                          // are in the matrix that was a sufficient 
                temp += route[arr[m]][arr[m+1]];                                // stopping point  
            }     

            if (temp < dist){                                                   // find which value is lowest
                dist = temp;                                                    // if temp is lower make dist equal temp
            }
        }
    }
  return dist;
}

function shuffle(arr) {
    var j, x, i;                                                                // Found shuffle function to
    for (i = arr.length - 1; i > 0; i--) {                                      // randomize for starting with
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    } 
    return arr;
}

function paths(v){                                                              // create an M x M size distance matrix
    var dist = [];                                                              // that randomly populates numbers from 1 - 10
    for (var l = 0; l < v; l++){                                                // unless on diagonal the value will be 0
        dist.push([]);
        for( var m = 0; m < v; m++){
            if(l === m){
                dist[l][m] = 0;
            } else {
                dist[l].push(Math.floor(Math.random()*10)+1);          
            }
       }
    }
    return dist;
}


var arr = [0,1,2,3];
arr = paths(3);
console.log(tsp_ls(arr));
console.log(tsp_hk(arr));




/*
* Resources:
* Received help from Kegan M via virtual meetings
* Data Structures and Algorithm Analysis in C++ 4th Edition Mark, Allen, Weiss
* https://stackoverflow.com/questions/4011629/swapping-two-items-in-a-javascript-array
* https://stackoverflow.com/questions/19036527/reverse-part-of-an-array-using-javascript
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
* https://www.sitepoint.com/implementing-memoization-in-javascript/
* https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19
* https://stackoverflow.com/questions/47114430/generating-a-2-opt-swap-neighborhood-from-a-javascript-array
* http://pedrohfsd.com/2017/08/09/2opt-part1.html
* https://link.springer.com/article/10.1007/s00453-013-9801-4
* http://on-demand.gputechconf.com/gtc/2014/presentations/S4534-high-speed-2-opt-tsp-solver.pdf
* https://stackoverflow.com/questions/47114430/generating-a-2-opt-swap-neighborhood-from-a-javascript-array
* https://www.youtube.com/watch?v=-JjA4BLQyqE
* https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
*/