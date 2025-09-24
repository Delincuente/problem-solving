class ListNode {
    constructor(val) {
        this.data = val;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val) {
        const newNode = new ListNode(val);
        if (!this.head) this.head = this.tail = newNode;
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    add(val) {
        const newNode = new ListNode(val);
        if (!this.head) this.head = this.tail = newNode;
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

const list = new LinkedList();
list.append(1);
list.add(2);
list.append(3);
list.add(4);
list.append(5);
list.print();