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

var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function (val) {
  const minStackTop = this.minStack.length - 1;
  const stackTop = this.stack.length - 1;

  this.stack.push(val); // By default, the stack has a push

  // Compare the numbers in the Top of stack and minStack.
  if (this.minStack[minStackTop] > this.stack[stackTop]) {
    // If the number in the minStack is smaller, then push
    this.minStack.push(this.minStack[minStackTop]);
  } else {
    // If the number in the minStack is larger, push the value currently coming into the minStak.
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack = this.stack.slice(0, this.stack.length - 1);
  this.minStack = this.minStack.slice(0, this.minStack.length - 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
