// Two Sum from the given array

/**
* @param {number[]} arr
* @param {number} target
* @return {number[]}
*
* Finds two numbers in an array that add up to a specific target,
* returning their indices. This solution uses a brute-force nested loop approach.
*
* Time Complexity: O(n^2) - The nested loops cause the function to run in quadratic time.
* Space Complexity: O(1) - No extra data structures are used, only a few variables.
*
**/

function twoSum(arr, target) {
    // The outer loop iterates through each element of the array.
    for (let outer = 0; outer < arr.length; outer++) {
        // The inner loop iterates through the remaining elements after the current element of the outer loop to avoid using the same element twice.
        for (let inner = outer + 1; inner < arr.length; inner++) {
            
            // Check if the sum of the two elements equals the target.
            if (arr[outer] + arr[inner] == target) {

                // If a solution is found, return the indices of the two elements.
                return [outer, inner]
            }
        }
    }

    // If no solution is found after checking all pairs, return an empty array or throw an error.
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