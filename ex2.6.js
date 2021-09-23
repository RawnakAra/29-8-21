var  YearsandCenturies = function (num){
    return Math.round(num-(num%100))
}
console.log(YearsandCenturies(1705))