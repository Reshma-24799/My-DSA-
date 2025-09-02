//https://leetcode.com/problems/group-anagrams/

//Method1
//time complexity O(n m logm)
//space complexity O(nm)
var groupAnagrams = function(strs) {
    let map={};
    for(let s of strs){
        let st = s.split("").sort().join("");
        if(!map[st]){
            map[st] = [s];
        } else{
            map[st].push(s);
        }
    }
    return [...Object.values(map)];
};

//Method2
//time complexity O(n m)
//space complexity O(nm)
var groupAnagrams = function(strs) {
    let map={};
    for(let s of strs){
        let freqArr = Array(26).fill(0);
        for(let j = 0;j<s.length;j++){
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            ++freqArr[index]; 
        }
        let key="";
        for(let k = 0;k<26;k++){
            key += String.fromCharCode(k) + freqArr[k];
        }
        if(!map[key]){
            map[key] = [s];
        } else{
            map[key].push(s);
        }
    }
    return [...Object.values(map)];
};