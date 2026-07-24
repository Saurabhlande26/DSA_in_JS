const fib = (n) => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    console.log({ i });
    console.log(i - 1, i - 2);
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};

// 2 3 4 5 6 7 8 9 10
// 4
console.log(fib(10));

// second method
function fibonacci(n) {
  let pre = 0;
  let next = 1;

  for (let i = 0; i < n; i++) {
    [pre, next] = [next, pre + next];
  }
  return pre
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8
