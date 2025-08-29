//https://leetcode.com/problems/largest-odd-number-in-string/
//time complexity: O(n)
//space complexitty: O(1)



var largestOddNumber = function(num) {
    for(let i = num.length-1; i >= 0;i--){
        if(Number(num[i]) % 2 == 1){
            return num.substring(0,i+1);
        }
    }
    return "";
};