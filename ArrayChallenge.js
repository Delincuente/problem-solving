/**
 * Function: ArrayChallenge
 * -------------------------
 * Determines whether a given array of numbers forms
 * an Arithmetic sequence, a Geometric sequence, or neither.
 *
 * Arithmetic sequence:
 *   - A sequence where the difference between consecutive terms is constant.
 *   - Example: [2, 4, 6, 8] → difference = 2
 *
 * Geometric sequence:
 *   - A sequence where the ratio between consecutive terms is constant.
 *   - Example: [2, 6, 18, 54] → ratio = 3
 *
 * If the sequence does not fit either pattern, return -1.
 *
 * Assumptions:
 *   - Input will always contain at least 2 numbers.
 *   - No array will contain all identical numbers.
 *   - 0 will not be entered (so division in ratio check is safe).
 *   - Negative numbers are allowed.
 *
 * Time Complexity: O(n)
 *   - We check each pair of numbers only once.
 *   - Early exit is used if both patterns fail before the end.
 *
 * Space Complexity: O(1)
 *   - We only use a few extra variables.
 *
 * @param {number[]} arr - The input array of numbers
 * @returns {string|number} - "Arithmetic", "Geometric", or -1
 */
function ArrayChallenge(arr) {
    if (arr.length < 2) return -1; // Not enough numbers to decide

    // Expected difference and ratio based on first two elements
    let diff = arr[1] - arr[0];
    let ratio = arr[1] / arr[0];

    // Assume both patterns are possible at the start
    let isArithmetic = true;
    let isGeometric = true;

    // Check the sequence from the 3rd element onward
    for (let i = 2; i < arr.length; i++) {
        // Check arithmetic pattern
        if (isArithmetic && arr[i] - arr[i - 1] !== diff) {
            isArithmetic = false;
        }

        // Check geometric pattern
        if (isGeometric && arr[i] / arr[i - 1] !== ratio) {
            isGeometric = false;
        }

        // 🚀 Early exit optimization:
        // If neither pattern holds, no need to continue
        if (!isArithmetic && !isGeometric) {
            return -1;
        }
    }

    // Decide the result after the loop
    if (isArithmetic) return "Arithmetic";
    if (isGeometric) return "Geometric";

    // Fallback if both failed (needed if they fail at the very end)
    return -1;
}

// -------------------------------
// Example Test Cases
// -------------------------------
console.log(ArrayChallenge([2, 4, 6, 8]));     // "Arithmetic"
console.log(ArrayChallenge([2, 6, 18, 54]));   // "Geometric"
console.log(ArrayChallenge([2, 4, 7, 11]));    // -1
console.log(ArrayChallenge([-2, -4, -6, -8])); // "Arithmetic"
console.log(ArrayChallenge([1, -2, 4, -8]));   // "Geometric"
