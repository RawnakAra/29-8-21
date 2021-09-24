function findShort(s){
    let words = s.split(' ');
    let minlength = words[0].length;
    for(let i=1 ;i< words.length; i++){
     if(minlength > words[i].length){
     minlength = words[i].length;}
    }
   return minlength
  }

  function findShort1(s){
   let shortsword=s.split(' ').reduce((callback,currentvalue) =>{
       return (callback.length > currentvalue.length ?currentvalue :callback)
   });
   return shortsword.length
  }
  console.log(findShort1("same chars may not be adjacent"))