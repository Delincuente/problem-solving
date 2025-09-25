class ListNode {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val) {
        const newNode = new ListNode(val);
        if (!this.head) this.head = this.tail = newNode;
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
    }

    printList() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" <-> "));
    }

    removeNthFromEnd(n) {
        if (!this.head || n <= 0) return;

        let fast = this.head;
        for (let i = 0; i < n; i++) {
            if (!fast) return;
            fast = fast.next;
        }

        if (!fast) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            else this.head.prev = null;
            return;
        }

        // wrong way (not giving correct OP)
        // for (let i = 0; i < n && fast; i++) {
        //     fast = fast.next;
        // }

        let slow = this.head;
        while (fast) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.prev.next = slow.next;
        if (slow.next) slow.next.prev = slow.prev;
        else this.tail = slow.prev;

        // this work as well (no need to wrile the if(!fast){...})
        // if (slow === this.head) {
        //     this.head = slow.next;
        //     if (!this.head) this.tail = null;
        //     else this.head.prev = null;
        //     slow = null;
        // } else {
        //     slow.prev.next = slow.next;
        //     if (slow.next) slow.next.prev = slow.prev;
        //     else this.tail = slow.prev;
        //     slow = null;
        // }
    }
}

const dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);
dll.append(5);
dll.printList(); // 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> nullptr

dll.removeNthFromEnd(2); // Remove 4
dll.printList(); // Expected: 1 <-> 2 <-> 3 <-> 5 <-> nullptr

dll.removeNthFromEnd(5); // Remove 1 (head)
dll.printList(); // Expected: 2 <-> 3 <-> 5 <-> nullptr

dll.removeNthFromEnd(1); // Remove 5 (tail)
dll.printList(); // Expected: 2 <-> 3 <-> nullptr

dll.removeNthFromEnd(2); // Remove 2
dll.printList(); // Expected: 3 <-> nullptr

dll.removeNthFromEnd(1); // Remove 3
dll.printList(); // Expected: nullptr