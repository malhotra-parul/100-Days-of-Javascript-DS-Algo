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
/*
The regular approach of using two nested loops will give us a time complexity of O(n**2).
Instead, we use a hash table a.k.a Objects in Javascript.
Step 1 : initialize a prevValues empty object.
Step 2 : run a regular for loop over the length of the nums array.
Step 3 : Calculate currentValue as the nums[i] - the current value in the loop.
Step 4 : Calculate neededValue which if added to currentValue will give us the target (k).
In order to calculate neededValue we simply subtract our currentValue from sum, k.
Step 5 : Next we check in the prevValues object if there is an already existent key neededValue.
If yes, we return true. Else, we simply add the currentValue key to our prevValues object.
And we return false from the overall function for the case where we couldnt find neededValue
even after iterating through the entire array.
Using this approach, our time complexity becomes O(n).
 */