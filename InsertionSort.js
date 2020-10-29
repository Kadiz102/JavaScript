/* 
*Kyle Beitz
 */

var numbers = [2, 10, 5, 8, 4, 6, 7, 3, 1, 9 ];

function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var val = arr[i];
        var j;
        for(j = i; j > 0 && arr[j-1] > val; j--) {
            arr[j] = arr[j-1];
        }
        arr[j] = val;
    }
    return arr;
}

function insertionSortReverse(arr) {
   for(var i = arr.length - 1; i >= 0; i--) {
       var val = arr[i];
       var j;
       for(j = i; j < arr.length && arr[j+1] < val; j++) {
           arr[j] = arr[j+1];
       }
       arr[j] = val;
   }
   return arr;
}

console.log(insertionSort(numbers));
console.log(insertionSortReverse(numbers));
//alert(insertionSort(numbers));
//alert(insertionSortReverse(numbers));

/** Average-Case Time Complexity of Insertion Sort:
* The average case time complexity is for the above insertion sort is Θ(n^2). 
* This is becuase the first for loop always goes through the array n times.
* The second for loop goes through the array and must do atlease n - 1 swaps
* because on average we can expect the array to be almost sorted.
* Therefore, n(n-1) = n^2 because we ignore the constant.
*/