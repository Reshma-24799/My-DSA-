//https://leetcode.com/problems/sort-an-array/
//time complexity: O(n logn)
//space complexity: O(N)

function mergeSort(nums){
    if (nums.length <= 1) {
        return nums;
    }
    let mid = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));
    return merge(left,right);
}
function merge(left,right){
    let i = 0,j=0;
    let res=[];
    while(i<left.length && j < right.length){
        if(left[i] < right[j]){
            res.push(left[i++]);
        }else{
            res.push(right[j++])
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)];
}
console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));