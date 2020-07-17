//Write a function fib() that takes an integer nn and returns the nth Fibonacci

// const fib = (n) => {
//     if(n < 0){
//         return "Not Found!"
//     }
//     let series = [];
//     if(n === 0) {
//         return 0;
//     }
//     if(n === 1) {
//         return 1;
//     }
//     if(n > 1){
//         return fib(n - 2) + fib(n - 1);
//     }
// };
//This gives a time complexity of O(2*n) which is way more terrible than O(n*2)

function fibonacci(n){

    if (n < 0) {
      return "Not Found!";
    }
    if (n === 0 || n === 1) {
      return n;
    }
    let prevprev = 0;
    let prev = 1;
    let current;
    for(let i = 1; i < n ; i++){
        current = prev + prevprev;
        prevprev = prev;
        prev = current;
    }
    return current;
}


console.log(fibonacci(5))
