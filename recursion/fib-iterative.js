function fibIterative(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  let twoBack = 0;
  let oneBack = 1;
  let fibSum = 0;

  for (let i = 2; i < n; i++) {
    fibSum = oneBack + twoBack;
    twoBack = oneBack;
    oneBack = fibSum;
  }
  return fibSum;
}

console.log(fibIterative(6));
