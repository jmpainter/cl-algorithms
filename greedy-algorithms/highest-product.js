function highestProduct(arr) {
  if (arr.length < 3) {
    throw new Error('array must be at least length three');
  }

  let highest = Math.max(arr[0], arr[1]);
  let lowest = Math.min(arr[0], arr[1]);
  let highestProductOfTwo = arr[0] * arr[1];
  let lowestProductOfTwo = arr[0] * arr[1];
  let highestProductOfThree = highest * lowest * arr[2];

  for (let i = 2; i < arr.length; i++) {
    const current = arr[i];
    highestProductOfThree = Math.max(
      highestProductOfThree,
      highestProductOfTwo * current,
      lowestProductOfTwo * current
    );

    lowestProductOfTwo = Math.min(
      lowestProductOfTwo,
      lowest * current,
      highest * current
    );

    highestProductOfTwo = Math.min(
      highestProductOfTwo,
      highest * current,
      lowest * current
    );

    lowest = Math.min(lowest, current);
    highest = Math.max(lowest, current);
  }

  return highestProductOfThree;
}

let arr = [3, 5, 6, 33, 12, -45];

console.log(highestProduct(arr));

arr = [-10, -10, 1, 3, 2];

console.log(highestProduct(arr));
