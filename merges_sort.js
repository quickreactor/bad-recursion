function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    } else {
        let arr2 = arr.splice(Math.floor(arr.length / 2))
        let sortedArr1 = mergeSort(arr);
        let sortedArr2 = mergeSort(arr2);
        let mergedArr = []
        while (sortedArr1.length > 0 && sortedArr2.length > 0) {
            mergedArr.push(sortedArr1[0] < sortedArr2[0] ? sortedArr1.splice(0,1)[0] : sortedArr2.splice(0,1)[0])
        }
        if (sortedArr1.length === 0) {
            sortedArr2.forEach(e => {
                mergedArr.push(e);
            })
        }
        if (sortedArr2.length === 0) {
            sortedArr1.forEach(e => {
                mergedArr.push(e);
            })
        }
        return mergedArr
    }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])) 
