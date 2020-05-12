var sortedSquares = function(A) {
    return A.map(element => element*element).sort((a,b)=> a-b);
};

const result = sortedSquares([-4,-1,0,3,10]);
console.log(result);