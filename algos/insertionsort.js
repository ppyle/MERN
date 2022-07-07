function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function insertion(arr){
    for (let i  = 1; i < arr.length; i++){
        let j = i;
        while (arr[i]< arr[i-1]){
            swap(arr, arr[i], arr[i-1]);
            if
        }
    }
}