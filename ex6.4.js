function isIsogram(str){
    if(str =="")
      return true
   else{
     let x=str.split(' ').join('').toLowerCase().split('')
    let obj={a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0}
   x.forEach(element =>{
     if(obj[element])
       obj[element]+=1
     else
       obj[element]=1
     for (let k in obj){
         if(obj[k]==0) 
         delete obj[k] ;
          }
   })
   if(Object.keys(obj).every((k) => obj[k] == 1))
    return true
    else 
    return false
 } 
 }
//  function isIsogram1(str){
//     if(str =="")
//     return true

//  }