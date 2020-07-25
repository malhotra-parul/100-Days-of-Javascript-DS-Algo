var validMountainArray = function(A) {
    let index;
    if(A.length <3) return false;
    for(let i = 0; i<A.length; i++){
        if(A[i] === A[i+1]){
            return false;
        }
        else if(A[i] > A[i+1]){
            index = i;
            break;
        }
    }
    for(let j = index+1; j<A.length - 1; j++){
        if(A[j]===A[j+1]) return false;
        else if(A[j] > A[j+1]){
            continue;
        }else{
            return false;
        }
    }
    return index ? true : false; 

};

console.log(validMountainArray([0,2,3,4,5,2,1,0]));