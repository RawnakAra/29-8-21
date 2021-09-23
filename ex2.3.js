function NextperfectSquare(num) {
    if(Math.sqrt(num,2)%1===0){
        return Math.pow((Math.sqrt(num,2)+1),2)
    }
}
console.log( NextperfectSquare(121));