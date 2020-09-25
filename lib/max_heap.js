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
}

module.exports = {
  MaxHeap
};
