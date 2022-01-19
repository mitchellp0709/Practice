// const sumArrayOfNums = (arr, index=0, sum=0) => {
  
//   if (index === arr.length) {
//     console.log(sum)
//     return sum 
//   }

//   sum+=arr[index]

//   return sumArrayOfNums(arr,index+1, sum)

// }

// sumArrayOfNums([2,4,5,8])


function bubbleSort(array) {
  // Make some sort of loop that keeps happening if there were any swaps
  // that happened this turn
  let sort = true 
  while (sort) {
    sort = false;
    for (let i = 0; i < array.length-1;i++) {
      if (array[i + 1] < array[i]) {
        let small = array[i+1]
        let big = array[i]
        array[i] = small
        array[i + 1] = big
        small = null
        big = null
        sort = true 
      }
    }
  }

  // reset swapHappened to false each time so we can detect if a swap
  // happened in this specific iteration.

  // Make another loop (inside the first one) to go through one
  // round of swapping from the start of the list to the end

  // Inside inner loop:
  // compare each pair of elements near each other
  // swap them if the bigger one was at a lower index.

  // Make sure to keep track of whether a swap happened!

  // After both loops have exited, remember to return the array
  return array;
}

console.log(bubbleSort([12, 6, 3, 7, 13, 8,0,70,100,-1]));