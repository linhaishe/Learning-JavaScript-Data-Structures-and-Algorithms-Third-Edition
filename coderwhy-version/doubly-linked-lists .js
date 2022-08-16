function DoublyLinkedList() {
  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  this.head = null;
  this.tail = null;
  this.length = 0;

  DoublyLinkedList.prototype.append = function (data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;
  };

  DoublyLinkedList.prototype.toString = function () {
    return this.backwardString();
  };

  DoublyLinkedList.prototype.forwardString = function () {
    let current = this.tail;
    let resultString = "";

    while (current) {
      resultString += `${current.data} `;
      current = current.prev;
    }

    return resultString;
  };

  DoublyLinkedList.prototype.backwardString = function () {
    let current = this.head;
    let resultString = "";

    while (current) {
      resultString += `${current.data} `;
      current = current.next;
    }

    return resultString;
  };

  DoublyLinkedList.prototype.insert = function (position, data) {
    if (position < 0 || position > this.length) {
      return false;
    }

    const newNode = new Node(data);
    // 如果链表为空
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (position === 0) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else if (position === this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let current = this.head;
      let index = 0;
      while (index++ < position) {
        current = current.next;
      }
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
    }

    this.length += 1;

    return true;
  };

  DoublyLinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;
    let index = 0;

    while (index++ < position) {
      current = current.next;
    }

    return current.data;
  };

  DoublyLinkedList.prototype.indexOf = function (data) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (current.data === data) {
        return index;
      }

      current = current.next;
      index += 1;
    }

    return -1;
  };

  DoublyLinkedList.prototype.update = function (position, newData) {
    if (position < 0 || position >= this.length) {
      return false;
    }

    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.data = newData;

    return true;
  };

  DoublyLinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) {
      return null;
    }
    let current = this.head;

    // 判断是否只有一个节点
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      // 其他三种情况 1. 删除第一个；2. 删除最后一个；3. 删除中间
    } else if (position === 0) {
      this.head.next.prev = null;
      this.head = this.head.next;
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail.prec.next = null;
      this.tail = this.tail.prev;
    } else {
      let index = 0;

      while (index++ < position) {
        current = current.next;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.length -= 1;
    return current.data;
  };

  DoublyLinkedList.prototype.remove = function (data) {
    const index = this.indexOf(data);
    return this.removeAt(index);
  };

  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  };

  DoublyLinkedList.prototype.size = function () {
    return this.length;
  };

  DoublyLinkedList.prototype.getHead = function () {
    return this.head.data;
  };

  DoublyLinkedList.prototype.getTail = function () {
    return this.tail.data;
  };
}

const list = new DoublyLinkedList();
list.append("abb");
list.append("abc");
list.append("add");
list.insert(0, "111");
list.insert(2, "222");
list.update(4, "333");
list.removeAt(0);
list.remove(2);
console.log(list);
