class MyStack {
    constructor() {
        this.elements = [];
    }

    // Menambahkan elemen ke dalam stack
    push(element) {
        this.elements = [...this.elements, element];
    }

    // Menghapus elemen dari stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        const lastElement = this.elements[this.elements.length - 1];
        this.elements = this.elements.slice(0, -1);
        return lastElement;
    }

    // Melihat elemen teratas stack
    top() {
        return this.isEmpty() ? "Stack is empty" : this.elements[this.elements.length - 1];
    }

    // Mengecek apakah stack kosong
    isEmpty() {
        return this.elements.length === 0;
    }

    // Menampilkan elemen-elemen dalam stack
    display() {
        return this.elements.reverse().join(" <- ");
    }
}

// Contoh penggunaan MyStack
const myStack = new MyStack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log("Stack contents:", myStack.display()); // Output: Stack contents: 30 <- 20 <- 10
console.log("Popped element:", myStack.pop()); // Output: Popped element: 30
console.log("Top element:", myStack.top()); // Output: Top element: 20
