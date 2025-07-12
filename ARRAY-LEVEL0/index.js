//https://leetcode.com/problems/single-number
//TIME COMPLEXITY: O(n)
//SPACE COMPLEXITY: O(n)

function singleNumber(nums){
    let map = new Map();
    for(let n of nums){
        if(map.has(n)){
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }
    for(let [key, value] of map.entries()){
        if(value === 1){
            return key;
        }
    }
}


console.log(singleNumber([4,1,2,1,2])); // Output: 4

//second solution using XOR
//time complexity: O(n)
//space complexity: O(1)
function singleNumberXOR(nums) {
    let xor =0;
    for(let n of nums){
        xor = xor ^ n;
    }
    return xor;
}