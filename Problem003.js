/** Project Euler: Problem 3: Largest prime factorPassed
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?**/

function largestPrimeFactor(number) {
  const primes = []; 
  while(number%2 === 0){
    primes.push(2)
    number = number/2
  }
  for (let i = 3; i <=number; i = i+2 ){
    while(number%i == 0){
       primes.push(i)
       number = number/i
    }
  
  }
  return Math.max(...primes);
}
