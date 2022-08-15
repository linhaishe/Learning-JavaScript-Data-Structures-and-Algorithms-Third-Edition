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
