const binarySearch = (target, nums)=>{
    let floorIndex = -1;
    let ceilingIndex = nums.length; //10

    // 0<10--> 
    while(floorIndex + 1 < ceilingIndex){
        const distance = ceilingIndex - floorIndex; //11
        const half = Math.floor(distance/2);    //5
        const guessIndex = floorIndex + half;   //4
        const guessValue = nums[guessIndex]; // 10
        
        if(target === guessValue){
            return guessIndex;
        }else if(target < guessValue) //3<10
        {
            ceilingIndex = guessIndex
        }else {
            floorIndex = guessIndex;
        }
    }
    return -1;
};

console.log(binarySearch(0, [1,3,6,8,10,13,17,18,20, 25]));