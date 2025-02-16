class MyQueue {
  constructor() {
    this.stack1 = []; // Stack utama untuk push
    this.stack2 = []; // Stack bantu untuk pop dan peek
  }

  push(x) {
    this.stack1.push(x); // Tambahkan elemen ke stack1
  }

  pop() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()); // Pindahkan elemen dari stack1 ke stack2
      }
    }
    return this.stack2.pop(); // Ambil elemen terdepan dari stack2
  }

  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()); // Pindahkan elemen dari stack1 ke stack2
      }
    }
    return this.stack2[this.stack2.length - 1]; // Ambil elemen terdepan dari stack2 tanpa menghapusnya
  }

  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0; // Queue kosong jika kedua stack kosong
  }
}

// Contoh penggunaan
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek());  // Output: 1
console.log(queue.pop());   // Output: 1
console.log(queue.empty()); // Output: false
