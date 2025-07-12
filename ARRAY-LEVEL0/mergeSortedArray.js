//https://leetcode.com/problems/merge-sorted-array/

//time: O(N)
//space: O(N)


// function mergeSortedArray(nums1,m,nums2,n){
//     let i = 0;
//     let j = 0;
//     let copy = nums1.slice(0,m);
//     for(let k=0;k<m+n;k++){
//         if(j>=n || (i<m && copy[i]<=nums2[j])){ // CHECKING BOUNDARY CONDITIONS,
//             nums1[k] = copy[i];
//             i++;
//         } else{
//             nums1[k] = nums2[j];
//             j++;
//         }
//     }
//     return nums1;
// }

// console.log(mergeSortedArray([1,2,3,0,0,0],3,[2,5,6],3)); // [1,2,2,3,5,6]



//second approach
//time: O(m+n)
//space: O(1)
function mergeSortedArray(nums1,m,nums2,n){
    let i = n-1;
    let j = n-1;
    let k = m+n-1;
    while(j>=0){
        if(i>=0 && nums1[i] > nums2[j]){
            nums1[k--] = nums1[i--];
        } else{
            nums1[k--] = nums2[j--];
        }
    }
    return nums1;
}
console.log(mergeSortedArray([1,2,3,0,0,0],3,[2,5,6],3)); // [1,2,2,3,5,6]
