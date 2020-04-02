function largestPalindromeProduct(n) {
  const result = []; 
  //create largest number with n integers
  const maxNumber = +[...Array(n)].reduce((a, c) => (a += 9), "");
  const minNumber = (maxNumber+1)/10

  for(let i = maxNumber; i >= minNumber; i--){

    for(let j = maxNumber; j >= minNumber; j--){
      let product = i*j; 
            let reverse = [...String(product)].reverse().join("");

      if(product == reverse){
        result.push(product)
        break
      }
    }
  }

  return Math.max(...result);
}
