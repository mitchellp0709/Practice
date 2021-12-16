function maxMin(operations, x) {
  let products = []
  let nums=[]
  for (let i = 0; i < operations.length; i++){
    if (operations[i] === "push") {
      nums.push(x[i])
      // console.log(nums)
    }
    if (operations[i] === "pop") {
      for (let j = 0; j < nums.length; j++){
        if (nums[j] === x[i]) {
          nums.splice(j, 1);
        }
        // console.log(nums)
      }


    }
    products.push(Math.min(...nums)*Math.max(...nums))
    //console.log(products[products.length-1])
    //console.log(nums)
  }

  return products
}


//console.log(op[0])
maxMin(["push","push","push","pop"], [1,6,8,1])




// function superStack(operations) {
//   let arr=[]
//   for (let x of operations) {
    
//     let spl = x.split(" ");
//     if (spl[0] === "push") {
//       arr.push(parseInt(spl[1]))
//       if (arr.length === 0) {
//         console.log("EMPTY");
//       } else {
//         console.log(arr[arr.length - 1])
//         // console.log(arr)
//       }
//     }
//     if (spl[0] === "pop") {
//       arr.pop()
//       if (arr.length === 0) {
//         console.log("EMPTY");
//       } else {
//         console.log(arr[arr.length - 1]);
//       }
//       // console.log(arr);
//     }
//     if (spl[0] === "inc") {
      
//       for (let i = 0; i < parseInt(spl[1]); i++){
        
//         arr[i]+=parseInt(spl[2])
//       }
//       if (arr.length === 0) {
//         console.log("EMPTY");
//       } else {
//         console.log(arr[arr.length - 1]);
//       }
//       // console.log(arr);
//     }
    
    
//   }



// }

// superStack(["push 4",
// "pop",
// "push 3",
// "push 5",
// "push 2",
// "inc 3 1",
// "pop",
// "push 1",
// "inc 2 2",
// "push 4",
// "pop",
// "pop"])

//superStack(['push 4', 'push 5', 'inc 2 1', 'pop','pop'])




// function minMoves(arr) {
//   let numOnes = 0;
//   let numZero = 0;
//   let distanceZero = 0;

//   for (let x of arr) {
//     if (x === 1) {
//       numOnes++
//     }
//     if (x === 0) {
//       numZero++
//       distanceZero += numOnes;
//     }
//   }

//   let distanceOne = numOnes * numZero - distanceZero;
//   console.log(distanceZero,distanceOne)
//   return Math.min(distanceZero,distanceOne)

// }
// console.log(minMoves([0, 1, 0, 1]));