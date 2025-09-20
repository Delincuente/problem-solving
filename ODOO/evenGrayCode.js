// function evenGrayCode(n) {
//     if (n === 0) return [0]; // Base case

//     // Get Even Gray Code for n-1 bits
//     const prev = evenGrayCode(n - 1);
//     const result = [];

//     // Step 1: Keep old sequence with leading 0
//     result.push(...prev);

//     // Step 2: Mirror old sequence and add leading 1
//     const add = 1 << (n - 1); // Value of the new highest bit
//     for (let i = prev.length - 1; i >= 0; i--) {
//         const candidate = add | prev[i];
//         // Include only if number of 1s is even
//         if (countOnes(candidate) % 2 === 0) {
//             result.push(candidate);
//         }
//     }

//     return result;
// }

// // Helper function to count number of 1s in binary
// function countOnes(num) {
//     let count = 0;
//     while (num > 0) {
//         count += num & 1;
//         num >>= 1;
//     }
//     return count;
// }


// function generateGrayCode(n) {
//     let result = [];
//     for (let i = 0; i < (1 << n); i++) {
//         result.push(i ^ (i >> 1));
//     }
//     return result;
// }

// console.log(generateGrayCode(3));
// [0, 1, 3, 2, 6, 7, 5, 4]


function grayCode(n) {
    if (n === 0) return [0];
    const prev = grayCode(n - 1);
    const result = [...prev];
    const add = 1 << (n - 1);
    for (let i = prev.length - 1; i >= 0; i--) {
        result.push(add | prev[i]);
    }
    return result;
}

function generateGrayCode(n) {
    if (n === 0) return [0];
    const prev = generateGrayCode(n - 1);
    const add = 1 << (n - 1);
    return [...prev, ...prev.slice().reverse().map(x => x | add)];
}

function evenGrayCode(n) {
    // return grayCode(n).filter(num => countOnes(num) % 2 === 0);
    return generateGrayCode(n).filter(num => countOnes(num) % 2 === 0);
}

function countOnes(num) {
    let count = 0;
    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }
    return count;
}

// Test
console.log(evenGrayCode(2)); // [0, 3]
console.log(evenGrayCode(3)); // [0, 3, 5, 6]


// Test Cases
console.log(evenGrayCode(1)); // [0]
console.log(evenGrayCode(2)); // [0, 3]
console.log(evenGrayCode(3)); // [0, 3, 5, 6]
console.log(evenGrayCode(4)); // [0, 3, 5, 6, 9, 10, 12, 15]
