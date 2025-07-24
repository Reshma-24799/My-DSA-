//https://leetcode.com/problems/length-of-last-word/

//time complexity: O(n)
//space complexitty: O(1)
var lengthOfLastWord = function(s) {
    let len = s.length;
    let count = 0;
    for(let i = len-1;i>=0;i--){
        if(s[i] !== " " ) {
            count++;
        }
        else if(count > 0){
            break;
        } 
    }
    return count;
}

//time complexity: O(n)
//space complexitty: O(n) -  split creates array
var lengthOfLastWord = function(s) {
    s = s.trim().split(" ");
    return s[s.length-1].length;
}