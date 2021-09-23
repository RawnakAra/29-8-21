function Uniqe(array) {
   for(let i=0;i<array.length;i++){
       if(array[i] !== array[i+1])
       return array[i+1]
      
   }
}
console.log(Uniqe([1,1,1,2,1,1]))