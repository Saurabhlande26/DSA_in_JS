const arr = [1, 2, 3, 4, 5];
let largest = Number.NEGATIVE_INFINITY;
let secLargest = Number.NEGATIVE_INFINITY;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secLargest = largest;
    largest = arr[i];
  } else if (arr[i] != largest && arr[i] > secLargest) {
    secLargest = arr[i];
  }
}
console.log({ largest, secLargest });
