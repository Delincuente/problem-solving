/** 
 *
 *  @param {string} str
 * @returns {number}  
 **/

function getStringLength(str) {
    let count = 0;
    for (const ch of str) {
        count++;
    }
    return count;
}

console.log(getStringLength("Programming"));