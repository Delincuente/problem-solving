// Maximum Sum Subarray of Size K
// Problem: Given an array, find the maximum sum of any contiguous subarray of size k.

/**
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 * @throws {Error}
 * 
 * Sliding Window Technique:
 * -------------------------
 * - Use two pointers (left and right) to maintain a "window" of size k.
 * - Expand the window by moving the right pointer and adding elements to the sum.
 * - If the window becomes larger than k, shrink it from the left.
 * - When the window size is exactly k, check if the current sum is the maximum so far. 
 * 
**/
function maximumPossibleSum(arr, k) {

    // Edge case: cannot form a subarray if k is larger than the array length
    if (k > arr.length) throw new Error("Invalid input: k is larger than array length");

    // Initialize variables
    let maxSum = -Infinity; // To store the maximum sum found
    let leftPointer = 0;    // Start of the sliding window
    let sum = 0;            // Current sum of the window

    // Iterate over the array with rightPointer as the end of the sliding window
    for (let rightPointer = 0; rightPointer < arr.length; rightPointer++) {

        // Add the current element to the window's sum
        sum += arr[rightPointer];

        // If window size exceeds k, shrink it from the left
        if (((rightPointer - leftPointer) + 1) > k) {
            sum -= arr[leftPointer];    // Remove the element going out of the window
            leftPointer++;              // Move the left boundary forward
        }

        // When the window size is exactly k, update maxSum if needed
        if (((rightPointer - leftPointer) + 1) === k) {
            maxSum = Math.max(maxSum, sum);
        }
    }

    // Return the maximum sum found
    return maxSum;
}

/**
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 * 
 * Optimized Sliding Window Technique:
 * -----------------------------------
 * - First, calculate the sum of the first k elements (initial window).
 * - Then, slide the window across the array one element at a time:
 *    - Add the new element entering the window.
 *    - Subtract the element leaving the window.
 * - Keep track of the maximum sum seen so far.
 * 
**/
function maximumPossibleSum2(arr, k) {

    // Edge case: cannot form a subarray if k is larger than the array length
    if (k > arr.length) throw new Error("Invalid input: k is larger than array length");
    
    let sum = 0;

    // Step 1: Calculate the sum of the first window (first k elements)
    for (let rightPointer = 0; rightPointer < k; rightPointer++)
        sum += arr[rightPointer];

    // Initialize maxSum with the sum of the first window
    maxSum = sum;

    // Step 2: Slide the window across the array
    for (let rightPointer = k; rightPointer < arr.length; rightPointer++) {

        // Add the new element entering the window (arr[rightPointer])
        // Subtract the element leaving the window (arr[rightPointer - k])
        sum += (arr[rightPointer] - arr[(rightPointer - k)]);

        // Update maxSum if the current window sum is greater
        maxSum = Math.max(maxSum, sum);
    }

    // Return the maximum sum found
    return maxSum;
}

// Examples

// Case - 1
let arr = [2, 1, 5, 1, 3, 2], k = 3;
console.log(arr, k, "M1 =>", maximumPossibleSum(arr, k));
console.log(arr, k, "M2 =>", maximumPossibleSum2(arr, k));

// Case - 2
let arr2 = [4, 2, 10, 23, 3, 1, 0, 20], k2 = 1;
console.log(arr2, k2, "M1 =>", maximumPossibleSum(arr2, k2));
console.log(arr2, k2, "M2 =>", maximumPossibleSum2(arr2, k2));

// Case - 3
let arr3 = [-2, -3, -4, -1, -2], k3 = 2;
console.log(arr3, k3, "M1 =>", maximumPossibleSum(arr3, k3));
console.log(arr3, k3, "M2 =>", maximumPossibleSum2(arr3, k3));

// Case - 4
let arr4 = [4, 2, 10, 23, 3, 1, 0, 20], k4 = 4;
console.log(arr4, k4, "M1 =>", maximumPossibleSum(arr4, k4)); // 39
console.log(arr4, k4, "M2 =>", maximumPossibleSum2(arr4, k4)); // 39

// Case - 5
let arr5 = [1, 2], k5 = 3
// console.log(maximumPossibleSum(arr5, k5));
console.log(maximumPossibleSum2(arr5, k5));
