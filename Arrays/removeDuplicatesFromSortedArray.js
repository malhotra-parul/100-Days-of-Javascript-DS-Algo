var removeDuplicates = function(nums) {
    var i=0;
    if(nums.length === 0) return 0;
    
    for(j=1; j< nums.length; j++){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
    }
    
    console.log(removeDuplicates([1,1,2]));