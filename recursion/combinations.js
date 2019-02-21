function getCombinations(string) {
  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  // Recursive call: get all possible combinations for all chars except last
  const combinationsOfAllCharsExceptLast = getCombinations(allCharsExceptLast);

  // Put the last char in all possible positions for each of the above combinations
  const combinations = new Set();
  combinationsOfAllCharsExceptLast.forEach(combinationOfAllCharsExceptLast => {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      const combination =
        combinationOfAllCharsExceptLast.slice(0, position) +
        lastChar +
        combinationOfAllCharsExceptLast.slice(position);
      combinations.add(combination);
    }
  });

  return combinations;
}

console.log(getCombinations('abc'));

// combinations(['a', 'b', 'c', 'd'], new Array(4));
