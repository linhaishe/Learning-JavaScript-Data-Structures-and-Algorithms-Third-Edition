// 单项链表
function LinkedList() {
  // 内部类：节点类
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  // 属性
  this.head = null;
  // 去记录当前列表存放了几个节点
  this.length = 0;

  LinkedList.prototype.append = function (data) {
    // 1. 创建新的节点
    const newNode = new Node(data);

    // 2. 判断是否是第一个节点,如果是第一个节点则直接指向newNode
    if (this.length === 0) {
      this.head = newNode;
    } else {
      // 3. 如果不是第一个节点，则循环next找到做后一个节点，当current.next === null不存在时则为最后一个节点
      // 不是最后一个节点时，我们不断获取下一个节点的指针进行判断
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // 找到最后一个节点
      // 最后的节点指向新的节点
      current.next = newNode;
    }

    this.length += 1;
  };

  LinkedList.prototype.toString = function () {
    let current = this.head;
    let listString = "";

    while (current) {
      listString += `${current.data} `;
      current = current.next;
    }

    return listString;
  };

  LinkedList.prototype.insert = function (position, data) {
    // 进行越界判断，负数等不可传入; 插入位置超过链表长度也是不可以的
    if (position < 0 || position > this.length) {
      return false;
    }
    const newNode = new Node(data);
    // 判断插入位置是否是第一个
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 如果插入的位置不是第一个
      let index = 0;
      let previous = null;
      let current = this.head;
      // 这里也做了append的方法的处理
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }

    this.length += 1;
    return true;
  };

  LinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let index = 0;
    let current = this.head;
    while (index++ < position) {
      current = current.next;
    }

    return current.data;
  };
  // 找到返回下标，没有找到返回-1
  LinkedList.prototype.indexOf = function (data) {
    let index = 0;
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index += 1;
    }

    return -1;
  };

  LinkedList.prototype.update = function (position, newData) {
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
  // 根据index删除元素
  LinkedList.prototype.removeAt = function (position) {
    let current = this.head;
    // 越界判断
    if (position < 0 || position >= this.length) {
      return undefined;
    }
    // 判断是否是删除第一个
    if (position === 0) {
      this.head = current.next;
    } else {
      let previous = null;
      let index = 0;

      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.length -= 1;
    return current.data;
  };

  // 根据数据删除节点
  LinkedList.prototype.remove = function (data) {
    // 获取其在列表中的位置
    const position = this.indexOf(data);
    // 根据位置删除节点
    return this.removeAt(position);
  };

  LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  };

  LinkedList.prototype.size = function () {
    return this.length;
  };
}

const list = new LinkedList();
list.append("abc");
list.append("def");
list.append("a123");
list.insert(3, "a123");
list.get(3);
list.update(3, "999");
list.remove("abc");
console.log(list);
