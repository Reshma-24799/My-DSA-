  //insertion sort
  //time complexity: O(n^2)
  //spaace compplexity : O(1)
  
  function insertionSort(arr){
     let n = arr.length;
     for(let i =1;i<n;i++){
      let curr = arr[i];
      let j = i-1;
      while(j>=0 && arr[j] > curr){
         arr[j+1] = arr[j];
         j--;
      }
      arr[j+1] = curr;
     }
     return arr;
  }
console.log(insertionSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]