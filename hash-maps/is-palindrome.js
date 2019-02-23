function isPalindrome(string) {
  const map = {};
  for (let char of string) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
  let oddCount = 0;
  for (let key in map) {
    if (map[key] % 2 === 1) {
      oddCount++;
    }
  }

  return oddCount > 1 ? false : true;
}

console.log(isPalindrome('civic'));
console.log(isPalindrome('ivicc'));
console.log(isPalindrome('civil'));
console.log(isPalindrome('livci'));
