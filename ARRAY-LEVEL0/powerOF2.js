//https://leetcode.com/problems/power-of-two/
//time: O(log n)
//space: O(1)
//using recursion


function powerOf2(n){
    if(n === 1) return true;
    else if( n<1 || n%2 !== 0) return false;
    else return powerOf2(n/2);
}
console.log(powerOf2(16)); // true