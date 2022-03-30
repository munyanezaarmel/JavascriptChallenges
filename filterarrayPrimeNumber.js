
  const array=[-5,-3,-2,-1,1,2,3,4,5,6,,7,8,9,10]
  function primeNumbers(num){
      for (let i=2;num>i;i++){
          if(num % i ===0){
              return false;
          }
      }
      return num>1;

  }
  console.log(array.filter(primeNumbers))