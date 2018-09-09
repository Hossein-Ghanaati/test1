/*
function sumPrimes(num) {
  let sieve = [];
  for(let i = 2; i <= num; i++){
    sieve.push(i);
  }

  for(let i = 0; i < sieve.length; i++) {

    sieve = sieve.filter( a => {

      if(a%sieve[i] == 0 && a != sieve[i]){
        return false;
      }

      return true;

    });
  }

  return sieve.reduce((x,y) => x + y);
}
*/
/*
function sumPrimes(num) {
  let sieve = [];
  for(let i = 2; i <= num; i++){
    sieve.push(i);
  }
  sieve = sieve.filter(a => {
    for(let i = 2; i < a; i++){
      if(a%i == 0 && a != i){
          return false;
      }
    }
    return true;
  })

  return sieve.reduce((x,y) => x + y);
}
*/
/*
function sumPrimes(num) {
  let arr = [];
  for (let i = 2;i<=num; i++){
    arr.push(i);
  }
  for (let i = arr.length-1; i>=0; i--){
    for (let j = 2; j<arr[i]; j++){ 
      if (arr[i]%j == 0){ 
      arr.splice(i,1); 
    } 
  } 
} 
  return arr.reduce((a, b) => a+b);
  }
  


console.log(sumPrimes(300000));
*/
console.time('ho');
function primes(num){
  let s = []; // sieve
  for(let i = 2; i <= num; i++){
    s.push(i);
  }
  for(let i = 0; i < s.length; i++) {
    if(s[i]==0){
      continue;
    }

    for(let j = s[i]*s[i]; j <= num;) {
      //console.log(j);
      

        s.splice(j-2, 1,0);

      
      j+=s[i];
    }
  }
  return s.reduce((a, b) => a+b);
}

console.log(primes(2500000));
console.timeEnd('ho');
console.time('ali');
function sumPrimes(num) {
  let arr = [];
     for( let i = 2 ; i <=num ; i++){
       arr.push(i);
      };
      for ( let j = 2 ; j <= arr.length; j++ ){
       for( let k = j ; k <= arr.length; k++ ){
         if(arr[k]% j  == 0){
           arr.splice(k, 1);
         };
       };
     };
 let sum =(a, b) => a + b;

 console.log(arr.reduce(sum));
     return arr.reduce(sum);
   }
sumPrimes(10000);
console.timeEnd('ali');
