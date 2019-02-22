function sortScores(scores) {
  const scoreArr = new Array(HIGHEST_POSSIBLE_SCORE).fill(0);

  scores.forEach(score => scoreArr[score]++);
  const sortedScores = [];

  for (let i = 0; i < scoreArr.length; i++) {
    for (let j = 0; j < scoreArr[i]; j++) {
      sortedScores.push(i);
    }
  }
  return sortedScores;
}

const unsortedScores = [37, 89, 41, 65, 91, 65, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(sortScores(unsortedScores));
