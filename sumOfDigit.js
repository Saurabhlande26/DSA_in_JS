var sum = 0;
let n = 12345;
while (n > 0) {
  rem = n % 10;
  sum += rem;
  n = Math.floor(n / 10);
}
console.log(sum)