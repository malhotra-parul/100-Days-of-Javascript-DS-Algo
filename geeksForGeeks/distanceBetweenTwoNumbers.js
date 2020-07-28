//Minimum distance between two numbers
const calculateDistance = (arr, x, y) => {
    if(!arr.includes(x) || !arr.includes(y)) return -1;
    let p = -1;
    let minDistance = Number.MAX_VALUE;

 
    for(let i =0; i< arr.length ; i++){
        if(arr[i] === x || arr[i] === y){
            if(p !== -1 || arr[i] !== arr[p]){
                minDistance = Math.min(minDistance, i-p);
            }
            p = i;
        }
       
    }
return minDistance;

}

// console.log(calculateDistance([1, 2, 3, 2],1,2));
console.log(calculateDistance([12,86, 39, 90,42, 67, 84,12, 66, 42, 62],42,12));
// i = 0; j = 3