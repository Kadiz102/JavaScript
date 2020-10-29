/* 
 * Kyle Beitz
 */

function fib(n) {
    if (n <= 1) {
        return n;
    }
    else {
        var k = fib(n - 2) + fib(n - 1);
        return k;
    }
}

function compute(n) {
    var arr = [];
    for(i = 1; i <= n; i++) {
        arr.push(fib(i));
    }
    return arr;
}

console.log(compute(1));
console.log(compute(1));
console.log(compute(3));
console.log(compute(5));
console.log(compute(10));

/**
 * A good invariant for the recursive implemantation of fib() is the base case.
 * Without the base case then the function would never end and just keep
 * running. I've come to this reasoning because we rely on the base case 
 * the recursive call once finished and if we don't have that we never terminate
 * the program because we must always have a case that makes progress towards 
 * the base case.
 */