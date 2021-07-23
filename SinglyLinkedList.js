class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// insert first node
	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}

	// insert last node
	insertLast(data) {
		let current = this.head;
		let node = new Node(data);

		if (!current) {
			this.head = node;
		} else {
			while (current.next) {
				current = current.next;
			}
			current.next = node;
			this.size++;
		}
	}

	// insert at index
	insertAt(index, data) {
		// if index is greater than linkedlist size.
		if (index >= this.size) {
			console.log("index out of bounds.");
			return;

			// if needs to be inserted at head or linkedlist is empty.
		} else if (index === 0 || !this.head) {
			this.head = new Node(data, this.head);
			this.size++;
		}

		let i = 0;
		let current = this.head;
		while (current && i <= index) {
			if (i === index - 1) {
				current.next = new Node(data, current.next);
				this.size++;
				return;
			}
			current = current.next;
			i++;
		}
	}

	// get at index
	getAt(index) {
		if (index > 0 && index >= this.size) {
			console.log("index out of bounds.");
			return;
		}

		let current = this.head;
		let i = 0;
		while (current && i <= index) {
			if (i === index) {
				// console.log(current.data);
				return current;
			} else {
				current = current.next;
				i++;
			}
		}
	}

	// remove at index
	removeAt(index) {
		// if index is greater than linkedlist size.
		if (index >= this.size) {
			console.log("index out of bounds.");
			return;

			// if head needs to be removed.
		} else if (index === 0) {
			if (this.head.next) {
				this.head = this.head.next;
				this.size--;
			} else {
				this.head = null;
				this.size--;
			}
		} else {
			let i = 0;
			let current = this.head;
			let prev;
			while (current && i <= index) {
				if (i === index - 1) {
					prev = current;
				} else if (i === index) {
					prev.next = current.next;
				}
				current = current.next;
				i++;
			}
		}
	}

	// delete node without access to head pointer
	deleteWithoutHead(node) {
		// if linked list is empty
		if (node.data === null) {
			console.log("Linked List empty.");
			return;
		} else if (node.next === null) {
			console.log("Tail cannot be removed without head pointer.");
		} else {
			// storing the next nodes data in a temp variable.
			let temp = node.next;
			// copying next nodes data to current one.
			node.data = temp.data;
			// setting current node's next pointer to the next pointer of the next node.
			node.next = temp.next;

			this.size--;
		}
	}

	// Reverses the list recursively.
	reverseListRecursively(head = this.head) {
		// Base case
		if (head === null || head.next === null) return head;

		// recursively calling the function.
		let newHead = this.reverseListRecursively(head.next);

		// reversing the nodes.
		head.next.next = head;

		// setting the next pointer of the new tail to null.
		head.next = null;

		// Setting the new head pointer.
		this.head = newHead;
		return newHead;
	}

	// clear list
	clearList() {
		this.head = null;
		this.size = 0;
	}

	// print list data
	printListData() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

const ll = new LinkedList();

ll.insertFirst(1);
ll.insertLast(2);
ll.insertLast(3);
ll.insertLast(4);
ll.insertLast(5);
ll.insertLast(6);
ll.reverseListRecursively();
// ll.deleteWithoutHead(ll.getAt(1));
ll.printListData();
