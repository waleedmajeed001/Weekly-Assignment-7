//  Create a function that takes an array, an index, and a value as parameters. Inside the
// function, use the splice method to insert the value at the specified index in the array.
// Return the modified array.

function insertValueAtIndex<I>(array: I[], index: number, value: I): I[] {
   
    if (index < 0 || index > array.length) {
        throw new Error('Index out of bounds');
    }
  
    array.splice(index, 0, value);

    return array;
}

var originalArray: number[] = [1, 2, 3, 4, 5];
var modifiedArray = insertValueAtIndex(originalArray, 7, 89);

console.log(modifiedArray); 
