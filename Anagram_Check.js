function anagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    let arr =[]
    for(let i=0; i<str1.length; i++){
        arr.push(str1[i]);
    }
    for(let i =0; i<str2.length; i++){
        let found= false;
        for(let j=0; j<arr.length;j++){
            if(arr[j]==str2[i]){
                arr[j]=null;
                found=true;
                break;
            }
        }
        if(!found){
                return false
            }
    }
    return true;
}
console.log(anagram("afafdd","addffa"))
console.log(anagram("ddf","dff"))