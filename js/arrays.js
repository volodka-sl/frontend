// arrays

// task 1
function uniqueArr(arr) {
    return Array.from(new Set(arr));
}

// task 2
function elemSumArr(arr) {
    const initValue = 0;
    return arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initValue
    );
}

// task 3
function arrIntersect(arr1, arr2) {
    let diff = arr1.filter((x) => arr2.includes(x));
    return Array.from(new Set(diff));
}

// task 4
function binarySearch(arr, need2Find) {
    let firstKey = 0;
    let lastKey = arr.length - 1;

    while (firstKey <= lastKey) {
        let center = Math.floor((firstKey + lastKey) / 2);

        if (arr[center] == need2Find) {
            return center;
        } else if (arr[center] < need2Find) {
            firstKey = center + 1;
        } else {
            lastKey = center - 1;
        }
    }
    return "Number is not in array!";
}

// task 5
function mergeTwoLists(arr1, arr2) {
    let newArr = [];

    while (arr1.length && arr2.length) {
        newArr.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
    }
    return [...newArr, ...arr1, ...arr2];
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    return mergeTwoLists(
        mergeSort(arr.splice(0, arr.length / 2)),
        mergeSort(arr)
    );
}
