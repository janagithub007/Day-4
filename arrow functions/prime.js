const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const numArray = [2, 3, 5, 7, 10, 11, 13];
const primeNumbers = numArray.filter(isPrime);
console.log("Prime Numbers:", primeNumbers);
