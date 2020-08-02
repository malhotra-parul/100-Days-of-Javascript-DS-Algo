// const mergeArray = (first, second) => {
//     return first.concat(second).sort((a, b) => a-b);
// }

const mergeArray = (first, second) => {
    let mergedArray = [];
    let firstIndex = 0;
    let secondIndex = 0;
    let mergedArrayIndex = 0;

    while(mergedArrayIndex < (first.length + second.length)){
        const isFirstArrayExhausted = firstIndex >= first.length;
        const isSecondArrayExhausted = secondIndex >= second.length;

        if(!isFirstArrayExhausted && (isSecondArrayExhausted || 
            (first[firstIndex] < second[secondIndex]))){
                mergedArray[mergedArrayIndex] = first[firstIndex];
                firstIndex++;
            }else {
                mergedArray[mergedArrayIndex] = second[secondIndex];
                secondIndex++;
            }
        mergedArrayIndex++;
    }

    return mergedArray;
}

console.log(mergeArray([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]));