// @ts-check

export default class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  // 向队尾添加一个（多个）新的项
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  // 移除队列的第一项，并返回被移除的元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  // 返回对一种第一个元素，最先被添加的元素，队列不做任何变动。front()
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

function Queue2() {
  this.items = [];

  Queue.prototype.enqueue = function (element) {
    this.items.push(element);
  };

  Queue.prototype.dequeue = function () {
    return this.items.shift();
  };

  Queue.prototype.peek = function () {
    return this.items[0];
  };

  Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  Queue.prototype.size = function () {
    return this.items.length;
  };

  Queue.prototype.toString = function () {
    let resultString = "";
    for (let i = 0; i < this.items.length; i++) {
      resultString += `${this.items[i]}`;
    }

    return resultString;
  };
}

const queue3 = new Queue2();

queue3.enqueue("123");
queue3.enqueue("456");
queue3.enqueue("789");
queue3.enqueue("555");

queue3.dequeue();
console.log(1, queue3);
queue3.dequeue();
console.log(2, queue3);

// 优先级队列 priorityQueue

function PriorityQueue() {
  // 在PriorityQueue中重新创建一个类，可以理解成内部类
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  // 封装属性
  this.items = [];

  // 实现插入方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    // 1. 创建QueueElement对象
    const queueElement = new QueueElement(element, priority);
    let added = false;

    // 2. 判断队列是否为空
    if (this.items.length === 0) {
      this.items.push(queueElement);
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
        }
      }
    }

    // 如果没有比较出结果，则说明优先级是最高的
    if (!added) {
      this.items.push(queueElement);
    }

    // 这里再继承  queue类的方法。。。可以继承也可以复制粘贴
  };
}
