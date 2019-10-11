const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        const node = new Node(data);
        if (!this._head) {
            this._head = node;
        }
        else{
            node.prev = this._tail;
            this._tail.next = node;
        }
        this._tail = node;
        this.length++;
        
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let current = {};
        Object.assign(current, this._head);
        if (current === null) return undefined;
        else {
            for (let i = 0; i < this.length; i++){
                if (i === index) {
                return current.data;
            }
                else current = current.next;
            }
        }
        return this;
    }

    insertAt(index, data) {
        let node = new Node(data);
        let current = Object.assign({}, this._head);
        
        if (current === null) {
            current = node;
        }
        for (let i = 0; i < this.length; i++){
            if (index === i){
                node.prev = current.prev;
                node.next = current;
                current.prev.next = node;
                current.prev = node;
                this.length++;
            }
            else current = current.next; 
        }
        
        return this;
    }

    isEmpty() {
        return (!this.length) ? true : false;
    }

    clear() {
        this.length = 0;
        this._tail = new Node();
        this._head = new Node();
        
        return this;
    }

    deleteAt(index) {
        let current = Object.assign({}, this._head);
        if (current === null) return undefined;
        else {
            for (let i = 0; i < this.length; i++){
                if (i === index) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
            }
                else current = current.next;
            }
        }
        this.length--;
        
        return this;
    }

    reverse() {
        let current = Object.assign({}, this._head) ;
        let buff = [];
        while(current !== null){
            buff.push(current.data);
            current = current.next;
        }

        buff.reverse();
        this.length = 0;
        this._head = null;
        this._tail = null;
        buff.forEach(val => this.append(val));
        return this;
    }

    indexOf(data) {
        let current ={};
        Object.assign(current, this._head);
        
        for (let i = 0; i < this.length; i++){
            if (current.data === data) return i;
            else current = current.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
