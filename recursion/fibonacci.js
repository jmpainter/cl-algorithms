function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function fibMemo(n, memo = []) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }

  const result = fibMemo(n - 2, memo) + fibMemo(n - 1, memo);

  memo[n] = result;
  console.log(memo);
  return result;
}

console.log(fibonacci(5));
console.log(fibMemo(5));
