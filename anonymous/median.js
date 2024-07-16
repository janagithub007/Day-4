let arrmed= function(){
    const findMedian = (arr1, arr2) => {
        const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
        const mid = Math.floor(mergedArray.length / 2);
        if (mergedArray.length % 2 === 0) {
            return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
        } else {
            return mergedArray[mid];
        }
    };
    const arrA = [1, 3, 5];
    const arrB = [2, 4, 6];
    const median = findMedian(arrA, arrB);
    console.log("Median:", median);
}
arrmed()
