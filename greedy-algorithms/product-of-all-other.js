function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error('Array must have length of at least 2');
  }
  const result = [];

  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    result[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  productSoFar = 1;
  for (let i = intArray.length - 1; i >= 0; i--) {
    result[i] *= productSoFar;
    productSoFar *= intArray[i];
  }
  return result;
}

const arr = [2, 6, 5, 9];
console.log(getProductsOfAllIntsExceptAtIndex(arr));
