var  nb_year =function (p0,percent, aug,p){
  for(let i=0;i<20;i++){
      let x=(p0 + p0*Math.pow(percent/100,i)+aug)
      console.log(x);
      if((x + x*Math.pow(percent/100,i)+aug)>=p){
          return i
      }
  }   
}
console.log(nb_year(1500, 5, 100, 5000));