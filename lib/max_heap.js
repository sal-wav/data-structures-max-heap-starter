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
    if (this.array[leftChildIdx] > this.array[rightChildIdx]) {
      if (this.array[idx] < this.array[leftChildIdx]) {
        [this.array[idx], this.array[leftChildIdx]] = [this.array[leftChildIdx], this.array[idx]];
        this.siftDown(leftChildIdx);
      }
    } else {
      if (this.array[idx] < this.array[rightChildIdx]) {
        [this.array[idx], this.array[rightChildIdx]] = [this.array[rightChildIdx], this.array[idx]];
        this.siftDown(rightChildIdx); 
      }
    }

  }
}

module.exports = {
  MaxHeap
};
