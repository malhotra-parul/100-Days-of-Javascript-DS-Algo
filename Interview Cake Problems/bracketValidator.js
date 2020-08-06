const isValid = (code) => {
 let openerToCloser = {
     "(" : ")",
     "{" : "}",
     "[" : "]"
 }

 let openers = new Set(["(", "{", "["]);
 let closers = new Set([")", "}", "]"]);

 let openersStack = [];

 for(let i=0; i< code.length; i++){
     let char = code.charAt(i);
     
     if(openers.has(char)){
         openersStack.push(char);
     } else if (closers.has(char)){
         if(!openersStack.length){
             return false;
         }
     }
     const lastAddedToStack = openersStack.pop();
     if(openerToCloser[lastAddedToStack] !== char){
         return false;
     }
 }

 return openersStack === 0;
};

console.log(isValid("([]{[]})[]{{}()}"));
