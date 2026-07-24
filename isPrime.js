const isPrime = (val) => {
  if (val <= 1) return false;
  for (let i = 2; i <= Math.sqrt(val); i++) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(7));

for (let i = 0; i < 20; i++) {
  if (isPrime(i)) {
    console.log("Prime", i);
  }
}
