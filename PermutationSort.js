/* 
 * Kyle Beitz
 */

permArr = [],
numbers = [];
var count = 0;
var sort = new Boolean(true);

function permutationSort(a) { 
  var temp;
  for (var i = 0; i < a.length; i++) {      // iterate over all elements in array
    temp = a.splice(i, 1);                  // split out each element
    numbers.push(temp);
        if (a.length == 0) {                // check if the array is empty 
            permArr.push(numbers.slice());  // and push permutations to array
            count = 0;                      // set count back to 0
        }
    permutationSort(a);                     // find permutations of array
    a.splice(i, 0, temp);                   // adding to array and changing order
    numbers.pop();                          // remove elements from array
        if (sortCheck(permArr) == false){   // check if its sorted
            count++;                        // increase count when not sorted
            break;                          //break out if sorted
        }
  }
  return "Permutations encounter before sorted : " + count;
  //return permArr;
};

function sortCheck(a){                             
    for (var i = 0; i < a.length - 1; i++) {     // iterate over array to 
        if (a[i] > a[i+1]) {                     // check it its sorted
            sort = false;
            break;
        }
        else { 
            sort = true;     
        }
     }
     return sort;                         // return true if sorted else false
}

//alert(permutationSort([2,1]));
alert(permutationSort([5,4,6,3,4]));
//alert(permutationSort([1]));
