//Reverse an array in-place

const reverse = (arr) => {
    let j= arr.length - 1 ;
    let temp;
    for(let i =0; i< arr.length ; i++){
            if(i<j){
            temp = arr[j]; //temp = l
            arr[j] =  arr[i]; // arr[last] = p
            arr[i] = temp;//arr[i] = l
            j--;
            }
 
    }
    return arr;
}



console.log(reverse(["p", "a", "r", "u", "l"]));

//i/p is an array of chars.
//use 2 pointer approach to traverse the array
//use a temp variable to hold this value for swapping.