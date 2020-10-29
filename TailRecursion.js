/*
 * Kyle Beitz
 */

var l = [3,5,9,3,4,6,7,2,1,8,3,3,5,2,3,9];
var n = [2,5,3,1,10,8,3,4,6,2,1];

function nMatches(arr, key) {
  let m = 0;
  async.each(arr, function(x, callback){
    if (x === key) {
        m++;
        callback();
    } else {
        callback();
    }      
    },function(err) {
        if ( err === null ) {
         // Do Nothing 
        } else {
            alert('error' + err);
            console.log('error' + err);
        }
    });
  return ('There are: ' + m + ' matching elements');
}
  
console.log(nMatches(l,3));
console.log(nMatches(n,2));

/*
 * The time complexity of this is O(n) because the function
 * and async has to go through all the elements in the array
 * but we can't guaranty the order of async.each.
 */