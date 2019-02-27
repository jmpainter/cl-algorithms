function findMatching(sentence, start) {
  let parenCount = 1;

  for (let index = start + 1; index < sentence.length; index++) {
    if (sentence.charAt(index) === '(') {
      parenCount++;
    } else if (sentence.charAt(index) === ')') {
      parenCount--;
    }
    if (parenCount === 0) {
      return index;
    }
  }
  return null;
}

const sentence =
  'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';

console.log(findMatching(sentence, 10));
