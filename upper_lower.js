let str ="Hello_WorLD";
let result = ""
for(let i = 0; i<str.length; i++){
    let n = str[i];
    if(n>="a" && n<="z"){
        result += n;
    }
    else if (n>="A" && n<="Z"){
        result +=n;
    }
    else{
        result +=n;
    }
}
console.log(result);