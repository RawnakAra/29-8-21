const binaryArrayToNumber = arr => {
    let sum=0;
   for(let i=0;i<arr.length;i++){
     sum=sum+arr[i]*Math.pow(2,arr.length-(i+1))
   }
    return sum
  };

  //2
  const binaryArrayToNumber1 = arr =>
      parseInt(arr.join(''), 2)
  
  let arr= [0, 1, 0, 1]
  console.log(binaryArrayToNumber(arr))
  console.log(binaryArrayToNumber1(arr));