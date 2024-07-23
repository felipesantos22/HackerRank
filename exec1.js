// PlusMinus

function PlusMinus(array) {
  let positiveNumber = 0;
  let negativeNumber = 0;
  let zeroNumber = 0;
  let total = array.length;

  for (let index = 0; index < total; index++) {
    if (array[index] > 0) {
      positiveNumber++;
    } else if (array[index] < 0) {
      negativeNumber++;
    } else {
      zeroNumber++;
    }
  }

  let positiveRatio = positiveNumber / total;
  let negativeRatio = negativeNumber / total;
  let zeroRatio = zeroNumber / total;

  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

PlusMinus([1, 2, 3, 4, -2, -5, 0, 0]);
