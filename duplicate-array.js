// Remove Duplicates from Sorted Array

/*
* @param {number[]} arr
* @return {number}
*
* Removes duplicates from a sorted array in-place.
* The function returns the new length of the array after removing duplicates.
* The original array is modified.
*/

function removeDuplicates(arr) {
    
    // Edge case: If the array is empty, or has only one element there are no duplicates to remove.
    if (arr.length == 0 || arr.length == 1) {
        return arr.length; // Return original array length
    }

    // Initialize the slowPointer at index 0. This pointer will track the position of the last unique element found.
    let slowPointer = 0;
    
    // Use a fast pointer "index" to iterate through the array starting from the second element.
    for (let index = 1; index < arr.length; index++) {

        // If the element at the fast pointer is different from the element at the slow pointer, it means we've found a new unique element.
        if (arr[slowPointer] !== arr[index]) {
    
            // Increment the slow pointer to make space for the new unique element.
            slowPointer++;
            
            // Copy the unique element from the fast pointer's position to the new position of the slow pointer.
            arr[slowPointer] = arr[index];
        }

        // If nums[index] is the same as nums[slowPointer], we do nothing and let the fast pointer continue to find the next unique element.
    }

    // The slowPointer is now at the last unique element's index. The new length of the array is this slowPointer + 1.
    return slowPointer + 1;
}

// Example usage:
let nums1 = [1, 1, 2];
let newLength1 = removeDuplicates(nums1);
console.log("\nCase - 1 ***********************************");
console.log("Original array: [1, 1, 2]");
console.log("New length:", newLength1);
console.log("Modified array:", nums1); // Output: [1, 2, 2]
console.log("Unique array:", nums1.slice(0, newLength1)); // Output: [1, 2]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let newLength2 = removeDuplicates(nums2);
console.log("\nCase - 2 ***********************************");
console.log("Original array: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]");
console.log("New length:", newLength2);
console.log("Modified array:", nums2); // Output: [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
console.log("Unique array:", nums2.slice(0, newLength2)); // Output: [0, 1, 2, 3, 4]

let nums3 = [1, 2, 3, 4];
let newLength3 = removeDuplicates(nums3);
console.log("\nCase - 3 ***********************************");
console.log("Original array: [1, 2, 3, 4]");
console.log("New length:", newLength3);
console.log("Modified array:", nums3); // Output: [1, 2, 3, 4]
console.log("Unique array:", nums3.slice(0, newLength3)); // Output: [1, 2, 3, 4]