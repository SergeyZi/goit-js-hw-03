function filterArray(numbers, value) {
    let newArray = [];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > value) {
            // console.log(numbers[i])
            newArray.push(numbers[i]);
        }
    }
    // console.log(newArray);
    return newArray;
        
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
