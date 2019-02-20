function reverseWords(arr) {
  arr = reverseSegment(arr, 0, arr.length - 1);
  let startOfCurrentWord = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === ' ' || i === arr.length) {
      reverseSegment(arr, startOfCurrentWord, i - 1);
      startOfCurrentWord = i + 1;
    }
  }
  return arr;
}

function reverseSegment(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(
  reverseWords([
    't',
    'h',
    'e',
    ' ',
    'e',
    'a',
    'g',
    'l',
    'e',
    ' ',
    'h',
    'a',
    's',
    ' ',
    'l',
    'a',
    'n',
    'd',
    'e',
    'd'
  ])
);
