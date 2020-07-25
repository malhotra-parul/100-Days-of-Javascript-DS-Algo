function solve(nums, k) {
    let prevValues = {};
    for(let index = 0; index < nums.length; index++){
        let currentNumber = nums[index];
        let neededValue = k - currentNumber;
        if(prevValues[neededValue] != null){
            return true;
        }else{
            prevValues[currentNumber] = index;
        }
}
     return false;
}

console.log(solve([35, 18, 8, 3, 22], 12));