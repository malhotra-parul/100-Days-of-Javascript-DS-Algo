const reverseWords = (message) => {
       reverseAWord(message, 0, message.length - 1);

       let currentWordStartIndex = 0;
       for(let i=0; i <= message.length; i++){
           if(i === message.length || message[i] === " "){
               reverseAWord(message, currentWordStartIndex, i-1 );
               currentWordStartIndex = i+1; 
           }
       }
       console.log(message);
    
};
const reverseAWord = (arr, leftIndex, rightIndex) => {

    while(leftIndex < rightIndex){

        const temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
        leftIndex++;
        rightIndex--;

        }
    }

console.log(reverseWords([ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ]));

