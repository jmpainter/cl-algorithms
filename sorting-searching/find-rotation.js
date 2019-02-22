function findRotation(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const startChar = arr[start].charCodeAt(0);
    const midChar = arr[mid].charCodeAt(0);
    if (midChar < arr[mid - 1].charCodeAt(0)) {
      return mid;
    } else if (midChar < startChar) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage'
];

console.log(findRotation(words));
