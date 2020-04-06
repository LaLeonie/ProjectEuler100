// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?


function smallestMult(n) {
  let result; 
  let integerArray = []; 

  //create helper function
  const dividerFunction = (product, num) => {return product%num === 0}

  //create array from integers up to n
  for (let i = 1; i <=n; i++){
  integerArray.push(i)
  }

  //cycle through products
  for (let j = 1; j<Infinity; j++){
    let product = j*n; 
    if(integerArray.every(el => dividerFunction(product,el))){
      result = product
      break
    }
  }

return result
}
