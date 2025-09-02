//https://leetcode.com/problems/isomorphic-strings/
//time complexity O(n)
//space complexity O(1)

var isIsomorphic = function(s, t) {
    let n = s.length;
    let mapTToS={};
    let mapSToT={};
    for(let i = 0; i<n;i++){
        if(!mapSToT[s[i]] && !mapTToS[t[i]]){
            mapSToT[s[i]] = t[i];
            mapTToS[t[i]] = s[i];
        } else{
            if(t[i] !== mapSToT[s[i]] || s[i] !== mapTToS[t[i]] ){
                return false
            }
        }
    }
    return true;

};