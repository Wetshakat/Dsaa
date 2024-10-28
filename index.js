// // let numbers = [64, 34, 25, 12, 22, 11, 90, 5];

// // function bubbleSortDescending(arr) {
// //     let n = arr.length;
// //     for (let i = 0; i < n - 1; i++) {
// //         for (let p = 0; p < n - i - 1; p++) {
// //             // Change the comparison for descending order
// //             if (arr[p] < arr[p + 1]) {
// //                 // Swap arr[p] and arr[p + 1]
// //                 let temp = arr[p];
// //                 arr[p] = arr[p + 1];
// //                 arr[p + 1] = temp;
// //             }
// //         }
// //     }
// //     return arr;
// // }

// // let sortedNumbersDescending = bubbleSortDescending(numbers);
// // console.log(sortedNumbersDescending);


let numbers = [64, 34, 25, 12, 22, 11, 90, 5];
function bubbleSortDescending(arr) {
    let n = arr.length;
    for( i = 0; i< n-1; i++) {
        for(let p = 0; p< n -1; p++) {
            if(arr[p] < arr[p+1]) {
                let temp = arr[p];
                arr[p]=arr [p+1];
                arr[p+1]=temp;
            }
        }
    }
    return arr;
}
let result = bubbleSortDescending(numbers)
console.log(result)


// let score = [64, 34, 25, 12, 22, 11, 90, 5];
// function bubbleSortAscending(arrey) {
//     let n = arrey.length;
//     for(  i = 0;  i<n-1;i++){
//         for( n+1> j ; j=0; j++) {
//             if( [j]>arrey[j + 1]){
//                 arrey[j]=arrey [j +1];
//                 arrey[j+1] = tempt
//             }
//         }
//     }
//     return arrey;
// }
// let tscore = bubbleSortAscending(score)
// console.log(tscore)

//  let arr = [64, 34, 25, 12, 22, 11, 90, 5];

// function bubbleSort(array) {
//     let n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 // Swap array[j] and array[j + 1]
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }

// let sortedArray = bubbleSort(arr);
// console.log(sortedArray);

let array  = [10 , 20, 21 , 30, 35,1,4, 7]

function bubbleSortAscending(array) { 
    let n = array.length;
    for(let i=0 ; i<n-1; i++){
        for(s=0 ; s<n-i-1; s++){
            if(array[s]>array[s+1]){
                let temp =array[s];
                array[s] = array[s+1];
                array[s+1] = temp;
            }
        }
    }
    return array
}
let output = bubbleSortAscending(array);
console.log(output) 