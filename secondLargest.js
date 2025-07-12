

function secondLargest(a) {
    if (a.length < 2) return null;
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < a.length;i++) {
        if (a[i] > first) {
            second = first;
            first = a[i];
        } else if (a[i] > second && a[i] !== first) {
            second = a[i];
        }
    }
    return second;
}
let val = secondLargest([1, 2, 3, 4, 5, 5]);
console.log("the second largest: " + val);