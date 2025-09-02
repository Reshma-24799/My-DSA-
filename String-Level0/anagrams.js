//https://leetcode.com/problems/valid-anagram/
//time complexity: O(n)
//space complexity: O(1) - hashmap
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let map = {};
    for(let i =0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        } else{
            ++map[s[i]];
        }
    }
    for(let i =0;i<t.length;i++){
        if(!map[t[i]] || map[t[i]] < 0){
             return false;
        }else{
            --map[t[i]];
        }
    }
    return true;
};

//time complexity: O(n log n) - sorting
//space complexity: O(n) - split creates array

var isAnagram = function(s, t) {
    if(s.split("").sort().join("") === t.split("").sort().join("")){
        return true;
    }
    return false;
};