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


// function insertionSort(array) {
  
//   for (let i = 1; i < array.length; i++) {
//     let value = array[i] 
//     let j = i - 1; 
//     while ((j > -1) && (value < array[j])) {
//       array[j + 1] = array[j]
//       j--
//     }
//     array[j+1]=value
//   }

//   return array
// }
// console.log(insertionSort([12, 6, 3, 7, 13, 8, 0, 70, 100, -1]));


const bucketSort = (array) => {
  const first = []
  const second = []
  const third = []

  for (num of array) {
    if (num <= 3) {
      first.push(num)
    } else if (num > 3 && num <= 6) {
      second.push(num)
    } else {
      third.push(num)
    }
  }
  first.sort((a, b) => a - b)
  second.sort((a, b) => a - b);
  third.sort((a, b) => a - b);
  let finalArray = []
  finalArray = first.concat(second)
  finalArray=finalArray.concat(third)
  return finalArray
}

console.log (bucketSort([12,6,3,7,13,8]))