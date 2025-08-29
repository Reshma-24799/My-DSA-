//https://leetcode.com/problems/split-a-string-in-balanced-strings/
//time complexity: O(n)
//space complexitty: O(1)



var balancedStringSplit = function(s) {
    let lcount = 0, rcount=0, paircount = 0;
    for(letter of s){
        if(letter ==='R'){
            rcount++;
        }
        if(letter === 'L'){
            lcount++;
        }
        if(lcount === rcount){
            paircount++;
            lcount = rcount = 0;
        }
    }
    return paircount;

};