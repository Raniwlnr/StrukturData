class MyQueue {
    constructor() {
        this.storage = [];
    }

    // Menambahkan elemen ke dalam antrian
    add(element) {
        this.storage = [...this.storage, element];
    }

    // Menghapus elemen dari antrian
    remove() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const [removedElement, ...rest] = this.storage;
        this.storage = rest;
        return removedElement;
    }

    // Melihat elemen pertama di antrian
    peek() {
        return this.isEmpty() ? "Queue is empty" : this.storage[0];
    }

    // Mengecek apakah antrian kosong
    isEmpty() {
        return this.storage.length === 0;
    }

    // Menampilkan elemen-elemen dalam antrian
    display() {
        return this.storage.join(" -> ");
    }
}

// Contoh penggunaan MyQueue
const myQueue = new MyQueue();
myQueue.add(5);
myQueue.add(15);
myQueue.add(25);
console.log("Queue contents:", myQueue.display()); // Output: Queue contents: 5 -> 15 -> 25
console.log("Removed element:", myQueue.remove()); // Output: Removed element: 5
console.log("Next element:", myQueue.peek()); // Output: Next element: 15
