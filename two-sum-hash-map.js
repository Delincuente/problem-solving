// Two Sum from the given array

/**
* @param {number[]} arr
* @param {number} target
* @returns {number[]}
*
* Finds two numbers in an array that add up to a specific target,
* returning their indices. This solution uses a single pass with a hash map.
*
* Time Complexity: O(n) - The function iterates through the array only once.
* Space Complexity: O(n) - The hash map stores up to n elements in the worst case.
**/

function twoSum(arr, target) {
    const numMap = new Map();
    // The iterates through each element of the array.
    for (let index = 0; index < arr.length; index++) {
        // Get the current element from the array using index.
        const currentElement = arr[index];

        // Calculate the complement needed to reach the target.
        const complement = target - currentElement;

        // Check if the complement exists in our hash map.
        if (numMap.has(complement)) {
            // If it exists, we have found our pair. Return the index of the complement and the current index.
            return [numMap.get(complement), index];
        }

        // If the complement is not found, add the current number and its index to the map.
        numMap.set(currentElement, index);
    }

    // The problem statement guarantees a solution, so this part is for robustness.
    return [];
}


// Example usage:
let nums1 = [2, 7, 11, 15];
let target1 = 9;
let result1 = twoSum(nums1, target1);
console.log(`Array: [${nums1}], Target: ${target1}`);
console.log("Indices:", result1); // Output: [0, 1]

let nums2 = [3, 2, 4];
let target2 = 6;
let result2 = twoSum(nums2, target2);
console.log(`\nArray: [${nums2}], Target: ${target2}`);
console.log("Indices:", result2); // Output: [1, 2]

let nums3 = [3, 3];
let target3 = 6;
let result3 = twoSum(nums3, target3);
console.log(`\nArray: [${nums3}], Target: ${target3}`);
console.log("Indices:", result3); // Output: [0, 1]