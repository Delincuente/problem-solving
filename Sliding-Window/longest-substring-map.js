/** 
 *
 * @param {string} str
 * @returns {number} 
 * 
 **/

function lengthOfLongestSubstring(str) {
    let maxLength = 0;
    let leftPointer = 0;
    const charMap = new Map();

    for (let rightPointer = 0; rightPointer < str.length; rightPointer++) {
        if (charMap.has(str[rightPointer]) && charMap.get(str[rightPointer]) >= leftPointer) {
            leftPointer = charMap.get(str[rightPointer]) + 1;
        }
        charMap.set(str[rightPointer], rightPointer);
        maxLength = Math.max(maxLength, ((rightPointer - leftPointer) + 1));
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));