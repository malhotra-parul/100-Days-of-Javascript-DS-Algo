//Your task is to complete the boolean function findTriplets() which takes the array arr[] and
// the size of the array (n) as inputs and returns True if the given array has a triplet with 
//zero sum and False otherwise. 

const findTriplet = (arr, n) => {
    let prevValues = {};
    if(arr.length < 3) return false;
    for(let i=0; i<= n-2; i++){
        for(let j=i+1; j<= n -1 ; j++){
            const neededValue = 0 - (arr[i] + arr[j]);
            const indexExists = prevValues[neededValue];
            if(indexExists != null){
                return true;
            }else{
                const currentValue = arr[j];
                prevValues[currentValue] = i;
            }
        }
        return false;
    }
}

console.log(findTriplet([-3,2,1,0,8], 5))

