
function palindrome(n){
    let r = 0;
    let d = 0;
    let num = n;
    while( n > 0){
        d = n % 10;
        r = r * 10 + d
        n = Math.floor(n/10);
    }
    return r === num;
}
console.log(palindrome(12321)); 
console.log(palindrome(12345)); 
