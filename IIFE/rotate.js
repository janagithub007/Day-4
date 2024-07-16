(function() {
    const rotateArray = (arr, k) => {
        const n = arr.length;
        const rotations = k % n;
        return [...arr.slice(rotations), ...arr.slice(0, rotations)];
    };
    const originalArray = [1, 2, 3, 4, 5];
    const rotatedArray = rotateArray(originalArray, 2);
    console.log("Rotated Array:", rotatedArray);
})();
