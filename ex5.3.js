let toCamelCase=(str) =>{
   str=str.split('')
   for(let i=0 ;i<str.length ;i++){
       if(str[i]=='-' || str[i]== '_' || str[i]==" "){
            str[i+1]=str[i+1].toUpperCase()
       }
       str[i]
   }
   for(let j=0 ;j<str.length ;j++){
    if(str[j]=='-' || str[j]== '_' || str[j]==" "){
         str.splice(j,1)
    }
    str[j]
}
   return str.join('')
}
console.log(toCamelCase(("the-stealth-warrior")));