//search for double values in an array
var checkIfExist = function(arr) {
        return arr.filter((value, i)=> (arr.indexOf(2*value) !== -1 && arr.indexOf(2*value) !== i))
        .length ? true : false;    
};

console.log(checkIfExist([-2,0,10,-19,4,6,-8])); //false
console.log(checkIfExist([0, 0])); //true