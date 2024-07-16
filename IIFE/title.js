(function() {
    const stringArray = ["hello", "world", "javascript"];
    const titleCaseArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log("Title Case Strings:", titleCaseArray);
})();
