let Fibonacci =(a)=>{
 if (a==1 || a==0)
 return 1;
 return (Fibonacci(a-1)+Fibonacci(a-2))
}
console.log(Fibonacci(10))

//2
let Fibonacci1=(a)=>{
    let arr=[1,1]
    for(let i=2;i<a;i++){
        arr.push(arr[i-1]+arr[i-2])
        
    }
    return arr
}
console.log(Fibonacci1(10))