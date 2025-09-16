// Duplication in array using recursion.

function hasDuplicate(arr, index = 0, seen = new Set()) {
    if (index >= arr.length) return false;

    if (seen.has(arr[index])) return true;

    seen.add(arr[index]);
    index++;
    return hasDuplicate(arr, index, seen);
}

function hasDuplicatePure(arr) {
    if (arr.length <= 1) return false;

    let head = arr[0];
    let rest = arr.slice(1);
    if (rest.includes(head)) return true;

    return hasDuplicatePure(rest);
}

console.log(hasDuplicate([1, 2, 3, 2, 5]));
console.log(hasDuplicate([1, 2, 3, 4, 5]));

console.log(hasDuplicatePure([1, 2, 3, 2, 5]));
console.log(hasDuplicatePure([1, 2, 3, 4, 5]));