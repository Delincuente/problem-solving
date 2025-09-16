/** 
 *
 * @param {string} str
 * @returns {number} 
 * 
 **/

function lengthOfLongestSubstring(str) {
    let maxLength = 0;
    let leftPointer = 0;
    const charSet = new Set();

    for (let rightPointer = 0; rightPointer < str.length; rightPointer++) {
        while (charSet.has(str[rightPointer])) {
            charSet.delete(str[leftPointer]);
            leftPointer++;
        }
        charSet.add(str[rightPointer]);
        maxLength = Math.max(maxLength, ((rightPointer - leftPointer) + 1));
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));