https://leetcode.com/problems/reverse-string-ii/
//time complexity: O(n)
//space complexitty: O(n)

var reverseStr = function(s, k) {
    let news="";
    for(i=0;i<s.length;i=i+2*k){
         news += revStr(s.substring(i,k+i)) + s.substring(i+k, i+2*k);
    }
    return news;
};
var revStr = function(s){
    s=  s.split("");''
    let j = s.length - 1;
    for(let i = 0; i< s.length/2;i++){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        j--;
    }
    return s.join("");
}

//better solution
//time complexity: O(n)
//space complexitty: O(1)
 var reverseStr = function(s, k) {
    s=  s.split("");
    for(i=0;i<s.length;i=i+2*k){
        let n = Math.min(k, s.length-i);
        let mid = Math.floor(n/2);
        for(let j = 0;j<mid;j++){
            let temp = s[i+j];
            s[i+j] =s[i+n-j-1] ;
            s[i+n-j-1] = temp;
        }
    }
    return s.join("");
};