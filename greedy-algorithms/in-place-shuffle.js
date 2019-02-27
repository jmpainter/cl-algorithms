function inPlaceShuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = getRandom(i, arr.length);
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
}

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor)) + floor;
}

console.log(inPlaceShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
