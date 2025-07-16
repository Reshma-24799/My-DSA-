//bubble sort
//time complexity: O(n^2)
//space complexity: O(1)

function bubbleSort(arr){
    let n = arr.length;
    for(let i = 0;i < n-1;i++){
        for(let  j = 0;j< n-i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]