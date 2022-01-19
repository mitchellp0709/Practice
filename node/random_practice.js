// const sumArrayOfNums = (arr, index=0, sum=0) => {
  
//   if (index === arr.length) {
//     console.log(sum)
//     return sum 
//   }

//   sum+=arr[index]

//   return sumArrayOfNums(arr,index+1, sum)

// }

// sumArrayOfNums([2,4,5,8])


// function bubbleSort(array) {
//   // Make some sort of loop that keeps happening if there were any swaps
//   // that happened this turn
//   let sort = true 
//   while (sort) {
//     sort = false;
//     for (let i = 0; i < array.length-1;i++) {
//       if (array[i + 1] < array[i]) {
//         let small = array[i+1]
//         let big = array[i]
//         array[i] = small
//         array[i + 1] = big
//         small = null
//         big = null
//         sort = true 
//       }
//     }
//   }
//   return array;
// }

// console.log(bubbleSort([12, 6, 3, 7, 13, 8,0,70,100,-1]));


function insertionSort(array) {
  
  for (let i = 1; i < array.length; i++) {
    let value = array[i] 
    let j = i - 1; 
    while ((j > -1) && (value < array[j])) {
      array[j + 1] = array[j]
      j--
    }
    array[j+1]=value
  }

  return array
}
console.log(insertionSort([12, 6, 3, 7, 13, 8, 0, 70, 100, -1]));