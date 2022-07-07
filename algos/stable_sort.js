/* 
Stable sort.
Visualization:
https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
Space: O(n) linear
steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
        - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
    - split the array in half and recursively merge the halves using the
        previously created merge function.
    - splitting of arrays stops when array can no longer be split.
    - an array of 1 item is by definition sorted, so two arrays of 1 item
        can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];

// [1,2,3,4]
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function stableSort(arr1, arr2){
    let output = []
    for (let i = 0, j = 0; i< arr1.length || j<arr2.length; i++, j++ ){
        console.log("this is i:", i)
        console.log("this is j:", j)
        if(arr1[i]<arr2[j]){
            output.push(arr1[i]);
            j--;
        }
        else if(arr1[i]>arr2[j]){
            output.push(arr2[j]);
            i--;
        }
        else if(arr1[i]==arr2[j]){
            output.push(arr1[i], arr2[j])
        }
        else if(i>=arr1.length){
            console.log(arr2.slice(j))
            output.push(...arr2.slice(j))
            return output
        }
        else if(j>=arr2.length){
            console.log(arr1.slice(i))
            output.push(...arr1.slice(i))
            return output
        }
    }

    return output
}

console.log(stableSort(sortedA1, sortedB1))