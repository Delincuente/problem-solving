/**
* 
* @param {number[]} arr 
* @return {number}
* 
**/
function minimumSwaps(arr) {
    let swapCount = 0;
    const arrIndList = arr.map((val, ind) => [val, ind]);
    const isVisitedList = new Array(arr.length).fill(false);
    arrIndList.sort((a, b) => a[0] - b[0]);
    for (const index in arrIndList) {
        if (isVisitedList[index] || arrIndList[index][1] == index) continue;

        let count = 0;
        let isVisitedIndex = index;

        while (!isVisitedList[isVisitedIndex]) {
            isVisitedList[isVisitedIndex] = true;
            count++;
            isVisitedIndex = arrIndList[isVisitedIndex][1]
        }

        if (count > 1) swapCount += (count - 1);
    }
    return swapCount
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));