//https://leetcode.com/problems/remove-element/description/

function removeValFromArray(arr, val){
   if(arr.length === 0) return null;
   let i =0;
   for(let j=0;j<arr.length;j++){
    if(arr[j] !== val){
        arr[i] = arr[j];
        i++;
    }
   }
   console.log(arr)
   return i;
    // return arr.filter((item, index) => arr.indexOf(item) === index).length;
}

console.log(removeValFromArray([1,1,2,2,2,3,4,5,5],2));