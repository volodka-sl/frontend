// classes

// task 1

class WidthIterator {
    constructor(rootNode) {
        this.currentNode = rootNode;
        this.queue = [];
        this.queue.push(this.currentNode);
    }

    next() {
        if (this.hasNext()) {
            this.currentNode = this.queue.shift();
            if (this.currentNode.leftNode != null) {
                this.queue.push(this.currentNode.leftNode);
            }
            if (this.currentNode.rightNode != null) {
                this.queue.push(this.currentNode.rightNode);
            }
            return this.currentNode;
        }
    }

    hasNext() {
        return this.queue.length !== 0;
    }
}

class LengthIterator {
    constructor(rootNode) {
        this.currentNode = rootNode;
        this.stack = [];
        this.stack.push(this.currentNode);
    }

    next() {
        if (this.hasNext()) {
            this.currentNode = this.stack.pop();
            if (this.currentNode.leftNode != null) {
                this.stack.push(this.currentNode.leftNode);
            }
            if (this.currentNode.rightNode != null) {
                this.stack.push(this.currentNode.rightNode);
            }
            return this.currentNode;
        }
    }

    hasNext() {
        return this.stack.length !== 0;
    }
}

class BinaryTree {
    constructor(rootNode = null) {
        this.rootNode = rootNode;
    }

    contains(info) {
        if (this.rootNode != null) {
            let elementFound = false;
            let currentNode = this.rootNode;
            while (!elementFound) {
                if (info == currentNode.info) {
                    return true;
                } else if (info > currentNode.info) {
                    currentNode = currentNode.rightNode;
                } else if (info < currentNode.info) {
                    currentNode = currentNode.leftNode;
                }
                if (currentNode == null) {
                    return false;
                }
            }
        } else {
            return false;
        }
    }

    insert(info) {
        if (this.rootNode != null) {
            let elementAdded = false;
            let currentNode = this.rootNode;
            while (!elementAdded) {
                if (info >= currentNode.info && currentNode.rightNode == null) {
                    currentNode.rightNode = new Node(info);
                    elementAdded = true;
                } else if (
                    info < currentNode.info &&
                    currentNode.leftNode == null
                ) {
                    currentNode.leftNode = new Node(info);
                    elementAdded = true;
                } else if (info >= currentNode.info) {
                    currentNode = currentNode.rightNode;
                } else if (info < currentNode.info) {
                    currentNode = currentNode.leftNode;
                }
            }
        } else {
            this.rootNode = new Node(info);
        }
    }

    remove(info) {
        if (this.contains(info)) {
            let elementRemoved = false;
            let currentNode = this.rootNode;
            let previousNode = null;
            while (!elementRemoved) {
                if (info == currentNode.info) {
                    if (
                        currentNode.rightNode == null &&
                        currentNode.leftNode == null
                    ) {
                        if (currentNode == this.rootNode) {
                            currentNode = null;
                            this.rootNode = null;
                            elementRemoved = true;
                        } else {
                            if (previousNode.rightNode == currentNode) {
                                previousNode.rightNode = null;
                            } else {
                                previousNode.leftNode = null;
                            }
                            currentNode = null;
                            elementRemoved = true;
                        }
                    } else if (currentNode.rightNode == null) {
                        if (currentNode == this.rootNode) {
                            this.rootNode = currentNode.leftNode;
                            currentNode = null;
                            elementRemoved = true;
                        } else {
                            if (previousNode.rightNode == currentNode) {
                                previousNode.rightNode = currentNode.leftNode;
                            } else {
                                previousNode.leftNode = currentNode.leftNode;
                            }
                            currentNode = null;
                            elementRemoved = true;
                        }
                    } else if (currentNode.leftNode == null) {
                        if (currentNode == this.rootNode) {
                            this.rootNode = currentNode.rightNode;
                            currentNode = null;
                            elementRemoved = true;
                        } else {
                            if (previousNode.leftNode == currentNode) {
                                previousNode.leftNode = currentNode.rightNode;
                            } else {
                                previousNode.rightNode = currentNode.rightNode;
                            }
                            currentNode = null;
                            elementRemoved = true;
                        }
                    } else {
                        let deleteItem = currentNode.leftNode;
                        while (deleteItem.rightNode != null) {
                            deleteItem = deleteItem.rightNode;
                        }
                        let temp = deleteItem.info;
                        this.remove(deleteItem.info);
                        currentNode.info = temp;
                        elementRemoved = true;
                    }
                } else if (info > currentNode.info) {
                    previousNode = currentNode;
                    currentNode = currentNode.rightNode;
                } else if (info < currentNode.info) {
                    previousNode = currentNode;
                    currentNode = currentNode.leftNode;
                }
            }
        }
    }

    widthDetour() {
        if (this.rootNode != null) {
            let widthIter = new WidthIterator(this.rootNode);
            while (widthIter.hasNext()) {
                console.log(widthIter.next().info);
            }
        }
    }

    lengthDetour() {
        if (this.rootNode != null) {
            let lengthIter = new LengthIterator(this.rootNode);
            while (lengthIter.hasNext()) {
                console.log(lengthIter.next().info);
            }
        }
    }
}

class Node {
    constructor(info) {
        this.info = info;
        this.leftNode = null;
        this.rightNode = null;
    }
}

// let aboba = new BinaryTree()
// aboba.insert(20)
// aboba.insert(10)
// aboba.insert(30)
// aboba.insert(5)
// aboba.insert(15)
// aboba.insert(25)
// aboba.insert(40)
// console.log(aboba)
// console.log(aboba.contains(40))
// aboba.remove(40)
// aboba.remove(20)
// console.log(aboba.contains(40))
// console.log(aboba)
// aboba.widthDetour()
// aboba.lengthDetour()
