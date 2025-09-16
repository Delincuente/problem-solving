// Write a recursive function to merge two lists 
// (e.g., A = ['a', 'b', 'c', 'd', 'e'] and B = [1, 2, 3, 4]) 
// to form a new list C = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e'].

let list1 = ['a', 'b', 'c', 'd', 'e'];
let list2 = [1, 2, 3, 4];

function mergeList(list1, list2) {
    if (list1.length === 0 && list2.length === 0) {
        return [];
    }

    let result = [];

    if (list1.length > 0) {
        result.push(list1.shift());
    }

    if (list2.length > 0) {
        result.push(list2.shift());
    }

    result = [...result, ...mergeList(list1, list2)];
    return result;
}

function mergeListIndexBase(list1, list2, i = 0, j = 0) {
    if (i >= list1.length && j >= list2.length) {
        return [];
    }

    let result = [];
    if (i < list1.length) {
        result.push(list1[i]);
        i++;
    }

    if (j < list2.length) {
        result.push(list2[j]);
        j++;
    }

    return [...result, ...mergeListIndexBase(list1, list2, i, j)];
    // to avoid (...) pass result as argument and take result = [] as parameter
}

console.log(mergeList([...list1], [...list2]));
console.log(mergeListIndexBase(list1, list2));
console.log(list1);
console.log(list2);