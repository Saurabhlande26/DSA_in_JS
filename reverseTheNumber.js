var rev = 0;
let n = 12345; // 5 4 3 2 1

while (n > 0) {
  rem = n % 10;
  console.log({ rem });
  rev = rev * 10 + rem;
  console.log({ rev });
  n = Math.floor(n / 10);
}

console.log(rev);
