//first approach:
/* var findMaxConsecutiveOnes = function(nums) {
    
 return nums.join("").split("0").sort().splice(-1).join("").length;
}; */

//better response time approach: 
var findMaxConsecutiveOnes = (nums)=>{
 let count = 0;
 let max = Number.MIN_SAFE_INTEGER;

 for(let i=0; i<nums.length; i++){
     if(nums[i]=== 1){
         count++;
     }else{
         if(count - max >0){
             max = count;
         }
         count = 0;
     }
 }
 return Math.max(count, max);
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));