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
    let parent = this.array[parentIdx];
    let curr = this.array[idx];
    if (curr > parent) {
      [parent, curr] = [curr, parent];
      this.siftUp(parentIdx);
    }
    return this.array;
  }
}

module.exports = {
  MaxHeap
};
