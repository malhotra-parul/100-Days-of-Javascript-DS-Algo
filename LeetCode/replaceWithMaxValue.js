// var replaceElements = function(arr) {
    
//     for(let i = 0 ; i < arr.length - 1; i++){
//         let max = arr[i+1];
//         for(let j=i+1; j< arr.length ; j++){
//             if(max<arr[j]){
//                 max = arr[j];
//             }
//         }
//         arr[i]= max;
//     }
//     arr[arr.length - 1] = -1;
//     return arr;
// };
//improving time complexity
var replaceElements = function(arr) {

    let temp;
    let high = -1;
    for(let i = arr.length -1 ; i>=0; i--){
        temp = arr[i]; // temp = 1; temp = 6
        arr[i] = high; //arr[5] = -1; arr[4] = 1
        high = high > temp ? high : temp;
        // high = 1 ; high = 6
    }
    return arr;
}



console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18, 6,6,6, 1, -1]