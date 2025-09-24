class TreeNode {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (val < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    inOrder(node = this.root) {
        if (!node) return;
        this.inOrder(node.left);
        process.stdout.write(node.data + " ");
        this.inOrder(node.right);
    }
}

const tree = new Tree();
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(1);
tree.insert(5);
tree.insert(6);
tree.insert(8);
tree.insert(9);
tree.insert(7);
tree.insert(0);
tree.inOrder();