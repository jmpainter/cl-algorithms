function isSingleRiffle(shuffledDeck, half1, half2) {
  let ptr1 = 0;
  let ptr2 = 0;

  for (let i = 0; i < shuffledDeck.length; i++) {
    if (ptr1 < half1.length && shuffledDeck[i] === half1[ptr1]) {
      ptr1++;
    } else if (ptr2 < half2.length && shuffledDeck[i] === half2[ptr2]) {
      ptr2++;
    } else {
      return false;
    }
  }
  return true;
}

const half1 = [1, 2, 3, 4, 5];
const half2 = [6, 7, 8, 9, 10];

let shuffledDeck = [1, 6, 7, 8, 2, 3, 4, 9, 10, 5];
console.log(isSingleRiffle(shuffledDeck, half1, half2));

shuffledDeck = [1, 4, 5, 6, 7, 8, 9, 10, 2, 3];
console.log(isSingleRiffle(shuffledDeck, half1, half2));
