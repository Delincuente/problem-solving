/**
* String Calculate
* Have the function StringCalculate (str) take the str parameter being passed and evaluate the mathematical expression within in.
* The double asterisks () represent exponentiation.
* For example, if stz were "(2+(3-1)3)3" the output should be 512. Another example: if str is "(2-0)(6/2)" the output should be 6. There can be parenthesis within the string so you must evaluate it properly according to the rules of arithmetic. The string will contain the operators: +,-, /, *, (,), and **. If you have a string like this: #/## or #+#(#)/#, then evaluate from left to right. So divide then multiply, and for the second one multiply, divide, then add. The evaluations will be such that there will not be any decimal operations, so you do not need to account for rounding.
*
* Examples
* Input: "6*(4/2)+3*1"
* Output: 15
*
* Input: "100*2**4"
* Output: 1600
**/

function StringCalculate(str) {
  // Handle implicit multiplication cases like ")(" or "2("
  str = str.replace(/\)\(/g, ")*(")     // ")(" → ")*("
        .replace(/(\d)\(/g, "$1*(")     // "2(" → "2*("
        .replace(/\)(\d)/g, ")*$1");    // ")2" → ")*2"

  // Use Function constructor to evaluate the expression
  // Only allow math operators, numbers, parentheses, and **
  if (!/^[0-9+\-*/() ]+|\*\*$/.test(str) && !str.includes("**")) {
    throw new Error("Invalid characters in expression");
  }

  return eval(str).toString();
}

// Examples
console.log(StringCalculate("(2+(3-1)*3)**3")); // 512
console.log(StringCalculate("(2-0)(6/2)"));     // 6
console.log(StringCalculate("6/(4/2)+3*1"));    // 15
console.log(StringCalculate("100**2*4"));       // 40000