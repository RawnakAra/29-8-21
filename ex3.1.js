var  nb_year =function (p0,percent, aug,p){
  let x=[]
  x[0]=p0+p0*(percent/100)+aug
 for(let i=1 ;i<20;i++){
  (x[i]=x[i-1]+x[i-1]*(percent/100)+aug) 
 }
// return Math.round(...x)
 return (Math.round(...x[x.indexOf(p)]==p)?x.indexOf(p):x.indexOf(p))

   
}
console.log(nb_year(1500, 5, 100, 5000));