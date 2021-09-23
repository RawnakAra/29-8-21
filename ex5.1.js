let trimmingstring = (str) =>{
    str=str.split('')
    console.log(str)
    str.splice(0,1)
    str.pop(str)
    return str.join('')
}
console.log(trimmingstring('jashv'))
