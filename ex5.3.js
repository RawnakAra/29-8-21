let toCamelCase=(str) =>{
   str=str.split('')
   for(let i=0 ;i<str.length ;i++){
       if(str[i]=='-'){
            str[i+1]=str[i+1].toUpperCase()
       }
       str[i]
   }
   return str.join('')
}
console.log(toCamelCase(("the-stealth-warrior")));