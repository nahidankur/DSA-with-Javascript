//Output:  2--> 10 --> 5 --> 12 --> 14-->null

class LinkedList {
    constructor(value) {
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head //pointer or reference to head
        this.lenght = 1
    }
    
    // a method to add a value to the last 
    append(value) {
        const newNode = {
            value : value, 
            next : null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.lenght++
        return this
    }

    // a methpd to add a value to the header
    prepend(value) {
        const newNode = {
            value : value,
            next : null
        }
        newNode.next = this.head
        this.head = newNode
        this.lenght ++
        return this
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(12)
myLinkedList.append(14)
myLinkedList.prepend(2)

console.log(myLinkedList)