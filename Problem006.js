//Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n) {
  const arr = []
  for (var i = 1; i <= n; i++){
    arr.push(i)
  }
  const sumOfSquares = arr.reduce((a,b)=>a + Math.pow(b,2), 0)
  const squareOfSum = Math.pow(arr.reduce((a,b)=> a+b),2)
  return squareOfSum - sumOfSquares ;
}
