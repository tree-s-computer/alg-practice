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
  this.array = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function (val) {
  this.array = [...this.array, val];

  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.array = this.array.slice(0, this.array.length - 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.array[this.array.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
