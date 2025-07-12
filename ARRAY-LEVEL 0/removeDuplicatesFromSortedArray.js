//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

function removeDuplicates(arr){
   if(arr.length === 0) return null;
   let i =0;
   for(let j=0;j<arr.length;j++){
    if(arr[j] > arr[i]){
        i++;
        arr[i] = arr[j]
    }
   }
   return i+1;
    // return arr.filter((item, index) => arr.indexOf(item) === index).length;
    // return [...new Set(arr)].length;
}

console.log(removeDuplicates([1,1,2,2,2,3,4,5,5,6,7,8,9,10]));