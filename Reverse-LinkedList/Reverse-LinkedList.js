class LinkedList {
    constructor(value) {
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head //pointer or reference to head
        this.length = 1
    }  
    // a method to add a value to the last 
    append(value) {
        const newNode = {
            value : value, 
            next : null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
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
        this.length ++
        return this
    }

    //PrintList
    PrintList() {
        const array = []
        let currentNode = this.head
        while( currentNode !== null ) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(array)
    }

    // insert value
    insert(index, value) {
        if(index >= this.length){
            return this.append(value)
        } 
        const newNode = {
            value : value,
            next : null
        }
        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next
        leader.next = newNode
        newNode.next = holdingPointer
        this.length++

        
    }

    //remove an item from the LinkedList
      remove(index) {
        const leader = this.traverseToIndex(index -1)
        const unWantedNode = leader.next
        leader.next = unWantedNode.next
        this.length --
      }


       traverseToIndex(index) {
        let counter  = 0
        let currentNode = this.head
        while( counter !==index ) {
            currentNode = currentNode.next
            counter ++
        }
        return currentNode
       }

       //reverse a link list
       reverse() {
        if(!this.head.next) {
            return this.head
        }
        let first = this.head
        this.tail = this.head
        let second = first.next

        while(second) {
            const temp = second.next
            second.next  = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
        return this
       }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(12)
myLinkedList.append(14)
myLinkedList.prepend(2)
myLinkedList.insert(2, 99)
myLinkedList.remove(2)
myLinkedList.reverse()
myLinkedList.PrintList()
// console.log(myLinkedList)

//InitiallY : 2--> 10 --> 5 --> 12 --> 14-->null
// Then insert 99 to the 2nd index
//  2--> 10 --> 5 --> 12 --> 14-->null
//                \   /
//                  99
//Now -->  2--> 10 -->99--> 5 --> 12 --> 14-->null
//Now delete the item of the 2nd index
//2--> 10 --> 5 --> 12 --> 14-->null

//final reverse output: 14 --> 12 --> 5 --> 10 --> 2