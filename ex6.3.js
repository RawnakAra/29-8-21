function longest(a,b) {
    let set=new Set(a+b)
    console.log([...set].sort().join(''))
}
longest("xyaabbbccccdefww","xxxxyyyyabklmopq")