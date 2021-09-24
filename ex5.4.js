function toWeirdCase(str){
    str=str.split('')
    for(let i=0 ;i<str.length ;i++){
        if(i %2== 0){
        str[i]=(str[i].toUpperCase()) }
         if(i %2 !==0){
        str[i]= str[i].toLowerCase()}    
    }
    return(str).join('')
}
    
console.log(toWeirdCase("Weird string case"));
 