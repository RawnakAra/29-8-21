var  YearsandCenturies = function (num){
    let x=num%100, y=(num-x)/100;   
    if(x===0)
    return y
    else 
    return y+1
}
console.log(YearsandCenturies(1700))