// @ts-check
// function Method（方法）和某一个对象实例有联系
// function（函数）

function Stack_Array() {
  this.items = [];
  Stack_Array.prototype.push = function (element) {
    this.items.push(element);
  };

  Stack_Array.prototype.pop = function () {
    return this.items.pop();
  };

  Stack_Array.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };

  Stack_Array.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  Stack_Array.prototype.size = function () {
    return this.items.length;
  };

  Stack_Array.prototype.toString = function () {
    return this.items.toString();
  };
}

export default class StackArray {
  constructor() {
    this.items = [];
  }
  // 添加一个新元素到栈顶的位置
  push(element) {
    this.items.push(element);
  }
  // 从栈中取出元素
  pop() {
    return this.items.pop();
  }

  // 查看栈顶元素，不对栈做任何的修改
  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  toArray() {
    return this.items;
  }

  toString() {
    return this.items.toString();
  }
}

// 十进制转二进制的方法封装
// if和while，在不确定要循环多少次的时候，选择使用while

function dec2bin(decNumber) {
  const stack = new StackArray();

  while (decNumber > 0) {
    stack.push(decNumber % 2);

    decNumber = Math.floor(decNumber / 2);
  }
  let binaryString = "";
  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }

  return binaryString;
}

function decimalToBinary(decNumber) {
  const remStack = new StackArray();
  let number = decNumber;
  let rem;
  let binaryString = "";

  while (number > 0) {
    // {1}
    rem = Math.floor(number % 2); // {2}
    remStack.push(rem); // {3}
    number = Math.floor(number / 2); // {4}
  }

  while (!remStack.isEmpty()) {
    // {5}
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}
