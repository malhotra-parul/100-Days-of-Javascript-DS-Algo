const parensMatcher = (str, position)=>{
    let stack = [str[position]];
        for(let i=position+1; i< str.length; i++){
            let char = str[i];
            if(char === "("){
                stack.push("(");
            }else if(char === ")"){
                if(stack.length === 1){
                    return i;
                }else{
                    stack.pop();
                }
            }
            
        }
return ("No closing parens found!");

    
}

console.log(parensMatcher('()(()', 2));