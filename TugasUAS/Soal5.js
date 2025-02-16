class DoublyListNode {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

function removeElements(head, val) {
    let current = head;

    while (current !== null) {
        if (current.val === val) {
            if (current.prev !== null) {
                current.prev.next = current.next;
            } else {
                head = current.next;
            }

            if (current.next !== null) {
                current.next.prev = current.prev;
            }
        }
        current = current.next;
    }

    return head;
}

const head = new DoublyListNode(1);
head.next = new DoublyListNode(2, head);
head.next.next = new DoublyListNode(3, head.next);
head.next.next.next = new DoublyListNode(2, head.next.next);
head.next.next.next.next = new DoublyListNode(4, head.next.next.next);

const newHead = removeElements(head, 2);
let current = newHead;
while (current !== null) {
    console.log(current.val); // Output: 1, 3, 4
    current = current.next;
}