//https://leetcode.com/problems/move-zeroes/
//TIME COMPLEXITY: O(n)
//SPACE COMPLEXITY: O(1)


function moveZeroToEnd(nums){
    let k = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i] != 0){
            nums[k++] = nums[i];
        }
    }
    for(let i = k; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;
}
console.log(moveZeroToEnd([0,1,0,3,12])); // Output: [1, 3, 12, 0, 0]
