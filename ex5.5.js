function abbrevName(name){  
  return name[0].toUpperCase()+'.'+name[name.indexOf(' ')+1].toUpperCase()
}
console.log(abbrevName('Sam Harris'))

function abbrevName1(name){
    name=name.split('')
    let arr=[]
     arr.push(name[0].toUpperCase())
    for(let i=0;i<name.length;i++){
        if(name[i] ==' ')
        arr.push(name[i+1].toUpperCase())
    }  
    return arr.join('.')
  }