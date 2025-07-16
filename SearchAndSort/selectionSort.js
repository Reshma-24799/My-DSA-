//selection sort
//time complexity: O(n^2)
//space complexity: O(1)

function selectionSort(arr){
    let n = arr.length;
    for(let i = 0;i < n-1;i++){
         let min = i;
       for(let j = i+1;j<n-1;j++){
            if(arr[j] < arr[min]){
                min = j;
            }
       }
       if(min !== i){
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
       }

    }
    return arr;
}
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]