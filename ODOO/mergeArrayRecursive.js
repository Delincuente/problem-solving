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

console.log(mergeList([...list1], [...list2]));
console.log(list1);
console.log(list2);