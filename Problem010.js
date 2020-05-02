//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below n.

function primeSummation(value) {
    var primesMap = [];
    let primes = []
    //map with all indexes set to true
    for(var i = 2; i < value; i++) {
        primesMap[i] = true;
    }

    var limit = Math.sqrt(value);
    //cycle through integers below limit
    for(var i = 2; i < limit; i++) {
      //if index corresponding to integer represents a prime, mark all of it's multiples as no primes, i.e. set values at corresponding indexes to false
        if(primesMap[i] === true) {
            for(var j = i * i; j < value; j += i) {
              //set all multiples of primes to false
                primesMap[j] = false;
            }
        }
    }

    //cycle through map and find indexes that reprent primes
    for(var i = 2; i < value; i++) {
        if(primesMap[i] === true) {
           primes.push(i)
        }
    }
    return primes.reduce((a,b)=> {return a+b})
}
