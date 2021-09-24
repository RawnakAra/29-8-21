function maskify(str) {
   if(str.length==0|| str.length==1 ||str.length==3 || str.length==4)
   return str
  return '#'.repeat(str.length-4)+str.split('').splice(str.length-4,str.length).join('')
}
console.log(maskify("435336464"));