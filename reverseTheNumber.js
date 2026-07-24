var rev = 0;
let n = 12345; // 5 4 3 2 1

while (n > 0) {
  rem = n % 10;
  rev = rev * 10 + rem;
  n = Math.floor(n / 10);
}

console.log(rev);
