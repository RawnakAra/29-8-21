function CountingDuplicates(str) {
    str=str.toLowerCase().split('')
  return  str.reduce((tally,val)=>{
        tally[val] =(tally[val] || 0)+1
        return tally
    },{})
    
}
function duplicationCount(text){
    return text.toLowerCase().split('').filter((val, i, arr) => {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }
console.log(CountingDuplicates("indivisibilities"));
console.log(duplicationCount("indivisibilities"));