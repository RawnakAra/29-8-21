let arr=[[2,0],[5,2],[7,3],[5,7],[5,5]]
function peopleonthebus(array){
    let som1=0 ,som2=0;
    array.forEach(element =>{
       som1 += element[0];
       som2 += element[1];
    })
    console.log(Math.abs(som1-som2))
}
 peopleonthebus(arr);