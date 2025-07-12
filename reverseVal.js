
function reverse(n){
    let copy = n;
    let r = 0;
    let d = 0;
    n = Math.abs(n);
    while( n > 0){
        d = n % 10;
        r = r * 10 + d
        n = Math.floor(n/10);
    }
    if( copy < 0 ){
        r = r+ '-';
    }
    let limit = Math.pow(2, 31) - 1;
    if (r > limit || r < -limit) {
        return 0; // Return 0 if the reversed number exceeds the 32-bit signed integer range
    }
    return r ;
}
console.log(reverse(12321)); 
console.log(reverse(-12345)); 
