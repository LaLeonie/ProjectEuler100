// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
  let sumOfabc = n; 
  let resultProduct; 
  for (let a = 1; a<n; a++){
    for(let b = 1; b<n; b++){
      let c = n - a - b; 
      let cSquared = Math.pow(c,2)
      let pythSum = Math.pow(a,2)+Math.pow(b,2)
      if(c>0 && cSquared === pythSum){
        resultProduct = a*b*c 
      }
    }
  }
  return resultProduct
}

specialPythagoreanTriplet(24);
