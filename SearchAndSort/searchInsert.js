//https://leetcode.com/problems/search-insert-position/
//time complexity: O(log n)
//space complexity: O(1)

var searchInsert = function(nums, target) {
   let left  =0;
   let right = nums.length -1;
   while(right >= left){
        let p = Math.floor((left+right)/2);
        if(nums[p] === target) return p;
        else if(target > nums[p]){
            left = p+1;
        } else{
            right = p-1;
        }
   }
   return left;
};
console.log(searchInsert([1,3,5,6], 2)); // Output: 1