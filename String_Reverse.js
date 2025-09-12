function Reverse(str){
    let reverse_str = "";
    for(let i=str.length-1; i>=0;i--){
        reverse_str += str[i];      
    }
   return reverse_str;
}
console.log(Reverse("Hello"));    // olleH

//     let reverse_str = "";
//     for(let i=0 ;i<str.length; i++){
//         reverse_str = str[i]+reverse_str ;      
//     }
//    return reverse_str;
// }
// console.log(Reverse("Hello"));
