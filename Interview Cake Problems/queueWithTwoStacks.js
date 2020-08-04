
class QueueTwoStacks {
    constructor(){
        this.stackOne = [];
        this.stackTwo = [];
    }
   
    enqueue(item) {
      this.stackOne.push(item);
    }
  
    dequeue() {
        if(this.stackTwo.length === 0){
            while(this.stackOne.length > 0){
                const newestItem = this.stackOne.pop();
                this.stackTwo.push(newestItem);
            }
            if(this.stackTwo.length === 0){
                throw new Error("Cannot dequue from an empty queue");
            }
        }
      return this.stackTwo.pop();
    }
  }

const q = new QueueTwoStacks();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
  console.log(q);
