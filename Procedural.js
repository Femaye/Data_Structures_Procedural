let arr = [26, 25, 23, 22, 21];
let n = arr.length;

function InsertionSort(arr, n) {
    let i, sorter, j;
    for(i = 1; i < n; i++) {
        sorter = arr[i];
        j = i - 1;

        //sorting elements of arr that ...
        while (j >= 0 && arr[j] > sorter) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = sorter;
    };
};

InsertionSort(arr, n);
console.log(arr, n)