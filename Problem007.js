// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the nth prime number?

function nthPrime(n) {
  const primes = [2]
  //initialize number to be checked
  let num = 3,
    isPrime = true;

  while(primes.length < n){
    let max = Math.ceil(Math.sqrt(num))

    for(let i = 0; primes[i]<= max; i++){
     if(num%primes[i]==0){
       isPrime=false
       break; 
     }
    }
    if(isPrime) primes.push(num)
    isPrime = true
    num += 2
  }

return primes[primes.length - 1];
}
