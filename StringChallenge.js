/**
 * Function: StringChallenge
 * --------------------------
 * Processes a string by applying two transformation rules:
 * 1. 'M' → duplicate the previous character and remove 'M'.
 * 2. 'N' → remove the next character and remove 'N'.
 *
 * Example:
 *   Input: "abcNdgM"
 *   Step1: "abcNdgM" → 'N' removes 'd' → "abcgM"
 *   Step2: "abcgM"   → 'M' duplicates 'g' → "abcgg"
 *   Output: "abcgg"
 *
 * Time Complexity: O(n)
 *   - We scan the string once.
 * Space Complexity: O(n)
 *   - We build a new result string.
 *
 * @param {string} str - input string containing lowercase letters and 'M'/'N'
 * @returns {string} - transformed string
 */
function StringChallenge(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch === 'M') {
            // Duplicate the previous character if it exists
            if (result.length > 0) {
                result.push(result[result.length - 1]);
            }
            // Skip adding 'M' itself
        } else if (ch === 'N') {
            // Skip the next character by advancing the index
            i++; // this removes next char
            // Skip adding 'N' itself
        } else {
            // Normal lowercase letter → just add to result
            result.push(ch);
        }
    }

    return result.join('');
}

// -------------------------------
// Example Test Cases
// -------------------------------
console.log(StringChallenge("abcNdgM"));   // "abcgg"
console.log(StringChallenge("hellMo"));    // "hello" ('M' duplicates 'l')
console.log(StringChallenge("anNimal"));   // "amal"  ('N' removes 'n' → "aimal")
console.log(StringChallenge("gM"));        // "gg"    ('M' duplicates 'g')
console.log(StringChallenge("xNyMz"));     // "xz"    ('N' removes 'y', 'M' duplicates 'z')
