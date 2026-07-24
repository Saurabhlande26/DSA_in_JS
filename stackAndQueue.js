const stack = [];
// Last In, First Out (LIFO)
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
console.log(stack); // [10]

// class stack

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.isEmpty() ? undefined : this.items.pop();
  }

  peek() {
    return this.isEmpty() ? undefined : this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(10);

console.log(stack.peek()); // 10
console.log(stack.pop()); // 10
console.log(stack.size()); // 1
