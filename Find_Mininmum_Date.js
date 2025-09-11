
let arr =[
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/02/28",
  "2023/03/05",
  "2023/01/15",
  "2023/04/10"
];
let smll = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<smll){
        smll=arr[i]
    }
}
    
console.log(smll)