// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

/**
 * @param {number} val
 * @return {void}
 */

class MinStack {
  constructor() {
    this.array = [];
  }

  push(val) {
    this.array = [...this.array, val];
  }

  pop() {
    this.array.splice(0, this.array.length - 1);
  }

  top() {
    return this.array[this.array.length - 1];
  }

  getMin() {
    Math.min(...this.array);
  }
}
