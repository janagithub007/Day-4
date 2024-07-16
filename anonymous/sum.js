const numbers = [10, 20, 30, 40, 50];
let sum = function(){
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Numbers:", sum);
}
sum()