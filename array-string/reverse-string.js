function reverseString(string) {
  const arr = string.split('');
  let ptr1 = 0;
  let ptr2 = arr.length - 1;
  while (ptr1 <= ptr2) {
    let temp = arr[ptr1];
    arr[ptr1] = arr[ptr2];
    arr[ptr2] = temp;
    ptr1++;
    ptr2--;
  }
  return arr.join('');
}

console.log(reverseString('hello'));
