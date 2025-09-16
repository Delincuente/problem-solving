/** 
 * 
 * @param {string} str 
 * @returns {string}
 **/
function removeNonUniqueCharacters(str) {
    const frequencyObject = {};
    for (const ch of str) {
        frequencyObject[ch] = (frequencyObject[ch] || 0) + 1;
    }

    return [...str].filter(ch => frequencyObject[ch] == 1).join("");
}

console.log(removeNonUniqueCharacters("Proramming"));