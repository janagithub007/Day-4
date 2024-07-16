let palindrom =function(){
    const isPalindrome = str => str === str.split("").reverse().join("");
const words = ["level", "hello", "madam", "world"];
const palindromes = words.filter(isPalindrome);
console.log("Palindromes:", palindromes);
}
palindrom()


