function mergeArrays(arr1, arr2) {
  const newArr = [];

  let longer;
  let shorter;
  if (arr1.length >= arr2.length) {
    longer = arr1;
    shorter = arr2;
  } else {
    longer = arr2;
    shorter = arr1;
  }
  let ptrLong = 0;
  let ptrShort = 0;

  while (ptrShort < ptrShort.length) {
    if (shorter[ptrShort] >= longer[ptrLong]) {
      newArr.push(longer[ptrLong]);
      newArr.push(shorter[ptrShort]);
    } else {
      newArr.push(shorter[ptrShort]);
      newArr.push(longer[ptrLong]);
    }
    ptrLong++;
    ptrShort++;
  }
  while (ptrLong < longer.length) {
    newArr.push(longer[ptrLong]);
    ptrLong++;
  }
  return newArr;
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19, 23, 44];

console.log(mergeArrays(myArray, alicesArray));
