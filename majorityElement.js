/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
 * 
 * Example 1:
 * 
 * Input: nums = [3,2,3]
 * Output: 3
 * Example 2:
 * 
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let frequency = {};
    for (let n of nums) {
        frequency[n] = (frequency[n] || 0) + 1;
    }

    let max = -Infinity;

    for (const element of Object.values(frequency)) {
        max = Math.max(max, element)
    }

    return Object.keys(frequency).find(k => frequency[k] === max);
};

function majorityElement_2(num) {
    let frequency = {};
    let max = 0;
    let major = num[0];

    for (let n of num) {
        frequency[n] = (frequency[n] || 0) + 1;
        if (frequency[n] > max) {
            max = frequency[n];
            major = n;
        }
    }

    return major;
}

var majorityElement_3 = function (nums) {
    const frequency = {};
    const n = nums.length;

    for (let num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;

        if (frequency[num] > n / 2) {
            return num;
        }
    }
};

// Boyer–Moore Majority Vote Algorithm
var majorityElementBoyerMoore = function (nums) {
    let candidate = null, count = 0;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
};

let list1 = [3, 2, 3];
console.log(majorityElement(list1));
console.log(majorityElement_2(list1));

let list2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(list2));
console.log(majorityElement_2(list2));