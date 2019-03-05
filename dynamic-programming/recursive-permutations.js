function getPermutations(string) {
  if (string.length <= 1) {
    return new Set(string);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string.slice(-1);

  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  const permutations = new Set();

  permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      const permutation =
        permutationOfAllCharsExceptLast.slice(0, position) +
        lastChar +
        permutationOfAllCharsExceptLast.slice(position);
      permutations.add(permutation);
    }
  });

  return permutations;
}
console.log(getPermutations('cat'));
