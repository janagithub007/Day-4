const stringArray = ["hello", "world", "javascript"];
let caps = function(){
    const titleCaseArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log("Title Case Strings:", titleCaseArray);
}
caps()
