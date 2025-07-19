class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let current = this.headNode;
    if (!current) return null;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let count = 0;
    let current = this.headNode;

    while (current !== null) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }
    return null;
  }

  pop() {
    if (!this.headNode) return;
    if (!this.headNode.nextNode) {
      this.headNode = null;
      return;
    }
    let current = current.headNode;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }
}
