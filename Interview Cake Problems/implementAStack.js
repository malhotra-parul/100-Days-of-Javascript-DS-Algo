class Stack{
    constructor(){
        this.items = [];
    }

    push(item){
         this.items.push(item);
    }

    pop(){
        if(!this.items.length){
            return null;
        }else{
            return this.items.pop();
        }
    }

    peek(){
        if(!this.items.length){
            return null;
        }else{
            return this.items[this.items.length - 1];
        }
    }
}

//implement a new class MaxStack using Stack class
// a method getMax() that returns the largest element in the stack
//dont remove the item. only return the largest item

class MaxStack extends Stack{

   constructor(){
       this.stack = new Stack();
       this.maxesStack = new Stack();
   }

   push(item){
       this.stack.push(item);
       if( this.maxesStack.peek() === null || item >= this.maxesStack.peek()){
           this.maxesStack.push(item);
       }
   }

   pop(){
       const item = this.stack.pop();
       if(item === this.maxesStack.peek()){
           this.maxesStack.pop();
       }
       return item;
   }

   getMax(){
       return this.maxesStack.peek();
   }

}