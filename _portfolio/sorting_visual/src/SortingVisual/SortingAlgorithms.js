export function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export function getSelectionAnimations(arr) {
  const animations = [];

  if (arr.length <= 1) return [arr, animations];
  selectionSort(arr, animations);

  return [arr, animations];
}

function selectionSort(arr, animations) {
    const N = arr.length;
    for (let i = 0; i < N - 1; i++) {
        let minIndex = i; 
        for (let j = i + 1; j < N; j++) {
            animations.push(["comp", j, minIndex]);
            animations.push(["comp_reset", j, minIndex]);
            if (arr[j] < arr[minIndex]) {
                // animations.push(["setMin", minIndex, j]); // prevMinIndex, minIndex
                minIndex = j;
            }
        }
        animations.push(["swap", minIndex, arr[i], false]);
        animations.push(["swap", i, arr[minIndex], true]);
        swap(arr, minIndex, i);
    }
}


function insertionSort(){
    return 0;
}

function mergeSort(){
    return 0;
}