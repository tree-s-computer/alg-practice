class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  push(x) {
    this.queue[this.tail++] = x;
  }

  pop() {
    if (this.empty()) return -1;
    return this.queue[this.head++];
  }

  size() {
    return this.tail - this.head;
  }

  empty() {
    return this.size() === 0 ? 1 : 0;
  }

  front() {
    return this.empty() ? -1 : this.queue[this.head];
  }

  back() {
    return this.empty() ? -1 : this.queue[this.tail - 1];
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
function processCommands(input) {
  const commands = input.trim().split("\n");
  const N = parseInt(commands[0], 10);
  const queue = new Queue();
  const output = [];

  for (let i = 1; i <= N; i++) {
    const command = commands[i].split(" ");

    switch (command[0]) {
      case "push":
        queue.push(parseInt(command[1], 10));
        break;
      case "pop":
        output.push(queue.pop());
        break;
      case "size":
        output.push(queue.size());
        break;
      case "empty":
        output.push(queue.empty());
        break;
      case "front":
        output.push(queue.front());
        break;
      case "back":
        output.push(queue.back());
        break;
    }
  }

  console.log(output.join("\n"));
}

processCommands(input);
