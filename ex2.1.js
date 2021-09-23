function SumLowettwo(array){
   let x=Math.min(...array)
   for(let i=0;i<array.length ;i++){
       if(array[i]=== x)
       array.splice(i,1)
   }
   let y=Math.min(...array)
   return (x+y)
}
let array=[1,1,3,4,8]
console.log(SumLowettwo(array));