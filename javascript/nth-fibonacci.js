function nthFibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }

  return fib[fib.length - 1];
}

console.log(nthFibonacci(0));
console.log(nthFibonacci(1));
console.log(nthFibonacci(2));
console.log(nthFibonacci(3));
console.log(nthFibonacci(4));
