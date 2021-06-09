function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
function selectionSort(arr){
    var N = arr.length;
    var min_idx=0;
    for (var i=0; i<N; i++){
        min_idx=0;
        for (var j=i+1; j<N; j++){
            if (arr[j]<arr[min_idx]){
                min_idx = j;
            }
        }
    arr = swap(arr, i, minIdx);
    }
    return arr;
}

function insertionSort(){
    return 0;
}

function mergeSort(){
    return 0;
}