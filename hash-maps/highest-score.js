function sortScores(scores, highest) {
  const map = {};
  for (let score of scores) {
    if (!map[score]) {
      map[score] = 1;
    } else {
      map[score]++;
    }
  }
  const sorted = [];
  for (let key in map) {
    for (i = 0; i < map[key]; i++) {
      sorted.push(key);
    }
  }
  return sorted;
}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;
console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
