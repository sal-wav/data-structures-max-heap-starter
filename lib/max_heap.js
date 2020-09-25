class MaxHeap {
  constructor () {
    this.array = [null];
  }
  getParent (idx) {
    const parentIdx = Math.floor(idx/2);
    return parentIdx;
  }
  getLeftChild (idx) {
    const leftChildIdx = idx * 2;
    return leftChildIdx;
  }
  getRightChild(idx) {
    const rightChildIdx = idx * 2 + 1;
    return rightChildIdx;
  }
  siftUp (idx) {
    if (idx === 1) {
      return;
    }
    let parentIdx = this.getParent(idx);
    if (this.array[idx] > this.array[parentIdx]) {
      [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
      this.siftUp(parentIdx);
    }
  }
  insert(val){
    this.array.push(val);
    this.siftUp(this.array.length-1);
  }
  siftDown(idx) {
    if (idx > Math.floor(this.array.length / 2)) return;
    let leftChildIdx = this.getLeftChild(idx);
    let rightChildIdx = this.getRightChild(idx);
    let leftChild = this.array[leftChildIdx];
    let rightChild = this.array[rightChildIdx];
    if (leftChild === undefined) {
      leftChild = -Infinity;
    }
    if (rightChild === undefined) {
      rightChild = -Infinity;
    }
    if (this.array[idx] > leftChild && this.array[idx] > rightChild) {
      return;
    }
    if (leftChild > rightChild) {
        [this.array[idx], this.array[leftChildIdx]] = [this.array[leftChildIdx], this.array[idx]];
        this.siftDown(leftChildIdx);
      } else {
        [this.array[idx], this.array[rightChildIdx]] = [this.array[rightChildIdx], this.array[idx]];
        this.siftDown(rightChildIdx);
      }
    }
    deleteMax() {
      let max = this.array[1];
      if (this.array.length === 1) return null;
      [this.array[1], this.array[this.array.length-1]] = [this.array[this.array.length-1], this.array[1]];
      this.array.pop();
      this.siftDown(1);
      return max;
    }
    isMaxHeap(array) {
      for (let i = 1; i < Math.floor(array.length / 2); i++) {
        let leftChildIdx = this.getLeftChild(i);
        let rightChildIdx = this.getRightChild(i);
        if (array[i] < array[leftChildIdx] ||
            array[i] < array[rightChildIdx]) {
              return false;
            }
      } return true;
      // let heapedArr = new MaxHeap();
      // heapedArr.array = array;
      // heapedArr.siftDown(1);
      // if (heapedArr.array === array) {
      //   return true;
      // }
      // return false;
    }
}

module.exports = {
  MaxHeap
};
