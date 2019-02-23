function wordCloud(string) {
  const wordArray = string
    .replace(/-/g, ' ')
    .replace(/[^\w\s]/g, '')
    .toLowerCase()
    .split(' ');

  const map = {};

  for (let word of wordArray) {
    if (!map[word]) {
      map[word] = 1;
    } else {
      map[word]++;
    }
  }
  return map;
}

console.log(
  wordCloud(
    'After beating the eggs, Dana read the next step: "Add milk and eggs, then add flour and sugar."'
  )
);
