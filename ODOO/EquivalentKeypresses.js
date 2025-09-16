/**
 * Equivalent Keypresses
* Have the function
* EquivalentKeypresses (strArr) 
* read the array of strings stored in strarr which will contain 2 strings 
* representing two comma separated lists of keypresses. 
* Your goal is to return the string true if the keypresses produce 
* the same printable string and the string false if they do not. 
* A keypress can be either a printable character or a backspace represented by -B.
* You can produce a printable string from such a string of keypresses by having 
* backspaces erase one preceding character.

* Examples
* Input: ["a,b,c,d", "a,b,c,d,-B,d"]
* Output: true
*
* Input: ["c,e,r,d", "ca, Br,d"]
* Output: false
**/

// Here's a Node.js solution for the Equivalent Keypresses problem using basic JavaScript logic:

function EquivalentKeypresses(strArr) {
  // Helper function to process keypresses
  const processKeys = (keyStr) => {
    const keys = keyStr.split(',');
    const result = [];

    for (let key of keys) {
      if (key === '-B') {
        result.pop(); // Backspace removes last char
      } else {
        result.push(key);
      }
    }

    return result.join('');
  };

  const [first, second] = strArr;

  return processKeys(first) === processKeys(second);
}

// Examples
console.log(EquivalentKeypresses(["a,b,c,d", "a,b,c,d,-B,d"])); // true
console.log(EquivalentKeypresses(["c,a,r,d", "c,a,-B,r,d"]));   // false
console.log(EquivalentKeypresses(["c,a,r,d", "ca,Br,d"]));   // false


// How it works:
// - Splits each string by commas.
// - Uses an array to simulate the keypress stack.
// - -B simulates a backspace using pop().
// - Compares the final string results from both inputs.

// Let me know if you want this in Python or another format too.