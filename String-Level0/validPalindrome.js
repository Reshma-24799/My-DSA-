//https://leetcode.com/problems/valid-palindrome
//time complexity: O(n)
//space complexitty: O(n)

var isPalindrome = function(s) {
   s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
   let left = 0, right = s.length-1;
   while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
   }
   return true;
};


//time complexity: O(n)
//space complexitty: O(1)
var isPalindrome = function(s) {
   let left = 0, right = s.length-1;
   while(left < right){
        if(!s[left].match(/[a-z0-9]/i)){
            left++;
        }
        else if(!s[right].match(/[a-z0-9]/i)){
            right--;
        }
        else if(s[left].toLowerCase() == s[right].toLowerCase()){
            left++;
            right--;
        } else {
            return false;
        }
   }
   return true;
};