let arr = [23, 34, 75, 92, 1, 2, 4, 6, 74, 555];
for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp
        j--
    }
}
console.log(arr) //[1, 2, 4, 6, 23, 34, 74, 75, 92, 555]
