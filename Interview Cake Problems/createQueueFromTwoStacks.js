//take 2 stacks
class QueueTwoStacks {
    constructor(){
        this.inStack = [];
        this.outStack = [];
    }

    enqueue(item){
        this.inStack.push(item);
    }

    dequeue(){
        if(this.outStack.length === 0){
            while(this.inStack.length > 0){
                const newItemPoppedFromInstack = this.inStack.pop();
                this.outStack.push(newItemPoppedFromInstack);
            }
            if (this.outStack.length === 0) {
                throw new Error("Can't dequeue from empty queue!");
              }
        }
        return this.outStack.pop();
    }
};

const demo = new QueueTwoStacks;
demo.enqueue("first");
demo.enqueue("second");
demo.enqueue("third");
demo.enqueue("fourth");
demo.dequeue();
console.log(demo);

//each enqueue takes a foxed constant time which doesnt depend on length of stack.
//each dequeue when outStack has items, also takes a constant time O(1)
//each dequeue when outStack is empty, takes a pop and push operation and does it m times, where
//m is the length.
//This gives a total runtime of O(m)