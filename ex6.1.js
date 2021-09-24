function accum(s) {
    let arr=[];
    s=s.split('')
    for(let i=0 ;i<s.length;i++){
        arr.push(s[i].toUpperCase())
        for(let j=0 ;j<i;j++){
          arr.push(s[i].toLowerCase())
        }
    }
    return arr.join("-")
}
console.log(accum("RqaEzty"))