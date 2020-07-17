var duplicateZeros = function (arr) {
  let n = arr.length; //8
  let i = 0;
  while (i <= arr.length - 1) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      arr.pop();
      i = i + 2;
    } else {
      i++;
    }
  }
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])); //len = 8;
