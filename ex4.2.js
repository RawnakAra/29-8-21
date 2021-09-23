let  Tribonacci =(a)=>{
    let arr=[1,1,1]
    for(let i=3;i<a;i++){
        arr.push(arr[i-1]+arr[i-2]+arr[i-3])  
    }
    return arr
}
console.log(Tribonacci(10))