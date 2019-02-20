function reverseArray(arr) {
  let ptr1 = 0;
  let ptr2 = arr.length - 1;
  while (ptr1 <= ptr2) {
    let temp = arr[ptr1];
    arr[ptr1] = arr[ptr2];
    arr[ptr2] = temp;
    ptr1++;
    ptr2--;
  }
  return arr;
}

console.log(reverseArray(['a', 'b', 'c', 'd']));
console.log(reverseArray(['a', 'b', 'c', 'd', 'e']));
console.log(reverseArray(['a']));
console.log(reverseArray([]));
