// Selection Sort
let arr=[23,34,75,92,1,2,4,6,74,555];
for(let i=0;i<arr.length-1;i++){
    let current_min = i;
    for(let j=i+1;j<arr.length; j++){
        if(arr[j]<arr[current_min]){
            current_min =j;
        }     
    }
    let temp = arr[current_min];
        arr[current_min] =arr[i];
    arr[i]=temp
}
console.log(arr)
