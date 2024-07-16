const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddnum = function(){
    const oddNumbers = arr.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);
}
oddnum()

