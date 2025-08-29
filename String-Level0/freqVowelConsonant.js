//https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/
//time O(n) space O(n)



var maxFreqSum = function(s) {
    let vmap = new Map();
    let cmap = new Map();
    let vowels = ['a','e','i','o','u'];
    for(letter of s){
        if(vowels.includes(letter)){
            if(!vmap.has(letter)){
                vmap.set(letter,1);
            }else{
                vmap.set(letter, vmap.get(letter)+1)
            }
        }
        else{
            if(!cmap.has(letter)){
                cmap.set(letter,1);
            }else{
                cmap.set(letter, cmap.get(letter)+1)
            }
        }
    }
    let sum = getMaxValue(vmap) + getMaxValue(cmap);
    return sum;
};
function getMaxValue(map){
    if (map.size === 0) return null;
    return Math.max(...map.values());
}

//method 2
var maxFreqSum = function(s) {
    let map = {};
    let vcount=0, ccount = 0;
    let vowels = ['a','e','i','o','u'];
    for(letter of s){
            if(!map[letter]){
                map[letter] = 1;
            }else{
               ++map[letter];
            }
    }
    for(letter of s){
        if(vowels.includes(letter)){
            vcount = Math.max(vcount, map[letter]);
        }else{
             ccount = Math.max(ccount, map[letter]);
        }
    }
    let sum = vcount +ccount;
    return sum;
};