
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


console.log(reverse(-12345)); 

// function reverse(s){
//     if(s.length === 0) return 0;
//     let i = s.length-1;
//     for(let j =0;j<s.length/2;j++){
//         let temp = s[j];
//         s[j] = s[i];
//         s[i] = temp;
//         i--;
//     }
//     return s;
// }
// console.log(reverse(['h','e','l','l'])); 

