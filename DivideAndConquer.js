/* 
 * Kyle Beitz
 */

function divideAndConquerSum(a) {
    if (a.length === 1) {
        return a[0];
    } else if (a.length === 0) {
        return 0;
    } else {
        var k = Math.floor(a.length / 3);
        var l = Math.floor(a.length /2);
        var b = divideAndConquerSum(a.slice(0,k));
        var c = divideAndConquerSum(a.slice(k,l));
        var d = divideAndConquerSum(a.slice(l, a.length));
        
        var arra = [];
        arra.push(b,c,d);
        
        var arrSum = arra.reduce((a,b) => a + b, 0)
        return arrSum;
    }
}

var twentyThree = [1,2,3,4,8,5];
var ten = [1,2,3,4];
var zero = [];
var two = [2];

//alert("The sum of: [1,2,3,4] = " + divideAndConquerSum(ten));
//alert("The sum of: [2] = " + divideAndConquerSum(two));
//alert("The sum of: [] = " + divideAndConquerSum(zero));
//alert("The sum of: [1,2,3,4,8,5] = " + divideAndConquerSum(twentyThree));
Console.log("The sum of: [1,2,3,4] = " + divideAndConquerSum(ten))
Console.log("The sum of: [2] = " + divideAndConquerSum(two))
Console.log("The sum of: [] = " + divideAndConquerSum(zero))
Console.log("The sum of: [1,2,3,4,8,5] = " + divideAndConquerSum(twentyThree))