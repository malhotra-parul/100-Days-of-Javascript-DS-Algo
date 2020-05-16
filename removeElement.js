var removeElement = function(nums, val) {
    let length = nums.length;
    for(let i=0; i<length; i++){
        if(nums[i] === val){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,2,2,3,0,4,2], 2));

//remove all instances of value in the array and return the length of array post deletion.
//Needs to be done in O(1) space.