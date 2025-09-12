function Reverse(str){
    let reverse_str = "";
    for(let i=str.length-1; i>=0;i--){
        reverse_str += str[i];      
    }
   return reverse_str;
}
console.log(Reverse("Hello"));    // olleH
