function changePossibilitiesTopDown(
  amountLeft,
  denominations,
  currentIndex = 0
) {
  debugger;
  // Base cases:
  // We hit the amount spot on. yes!
  if (amountLeft === 0) return 1;

  // We overshot the amount left (used too many coins)
  if (amountLeft < 0) return 0;

  // We're out of denominations
  if (currentIndex === denominations.length) return 0;

  console.log(
    'checking ways to make ' +
      amountLeft +
      ' with [' +
      denominations.slice(currentIndex).join(', ') +
      ']'
  );

  // Choose a current coin
  const currentCoin = denominations[currentIndex];

  // See how many possibilities we can get
  // for each number of times to use currentCoin
  let numPossibilities = 0;
  while (amountLeft >= 0) {
    numPossibilities += changePossibilitiesTopDown(
      amountLeft,
      denominations,
      currentIndex + 1
    );
    amountLeft -= currentCoin;
  }

  return numPossibilities;
}

console.log(changePossibilitiesTopDown(4, [1, 2, 3]));
