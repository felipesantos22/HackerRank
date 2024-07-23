// PlusMinus

function miniMaxSum(array) {  

  const minSum = array.sort((a, b) => a - b).slice(0, 4).reduce((acc, cur) => acc + cur, 0);
  const maxSum = array.sort((a, b) => b - a).slice(0, 4).reduce((acc, cur) => acc + cur, 0);

  console.log(minSum, maxSum);
}

miniMaxSum([1,3,4,5,9]);
