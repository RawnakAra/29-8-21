
//   function findShort1(s){
//    let shortsword=s.split(' ').reduce((callback,currentvalue) =>{
//        (callback.length < currentvalue.length ?currentvalue :callback)
//    });
//    return shortsword
//   }
 // console.log(findShort1("same chars may not be adjacent"))

function name1(str) {
    str = str.trim().split(" ")
    let sum = Math.max(...str.map((v) => { return v.length }))
    return str.filter((v) => v.length == sum).join(" ")
}
console.log(name1("dffdv sfs dsfsdfs sdsf aaa dsfsdfs"));
