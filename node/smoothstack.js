//There is a road consisting of N segments, numbered from 0 to N-1, represented by a string S. Segment S[k] of the road may contain a pothole, denoted by a single uppercase "X" character, or may be a good segment without any potholes, denoted by a single dot ".".

//For example, string ".X..X" means that there are two potholes total in the road. 

//The road fixing machine can patch over three consecutive segments at once with sphalt and repair all the potholes located within each of these segments. Good or already repaired segments remain good after patching them. 

//Compute the minimum number of patches required to repair all the potholes in the road. Write a function that, given a string S of length N, returns the minimum number of patches required to repair all the potholes. 



// function solution(S) {
//   let patches = 0;
//   for (let i = 0; i < S.length; i++){
    
//     if (S[i] === "X") {
//       patches++
//       i+=2
//     }
//     if (i >= S.length) {
//       return patches
//     }
//   }
//   return patches

// }

// console.log(solution("X"));




// function solution(A) {
//   let count = 0;
//   if (A.length <= 1) { return 0 }
//   if (A.length === 2 && A[0] === A[1]) { return 1 }
//   if (A.length === 2 && A[0] !== A[1]) {return 0}

//   for (let i = 1; i < A.length-1; i++){
//     if (A[i] === A[i - 1] || A[i] === A[i + 1]) {
//       count++
//     } 
//     if (A[i] === A[i - 1] && A[i] === A[i + 1]) {
//       count--
//     }
//   }

//   return count

  // if (A.length - count < count) {
  //   return A.length-count
  // } else {
  //   return count
  // }
// }



// function sol2(A) {
//   let oneStart = 0;
//   let zeroStart = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === 1 - (i % 2)) {
//       oneStart ++
//     }
//     if (A[i] === i % 2) {
//       zeroStart ++
//     }
//   }
//   return Math.min(zeroStart, oneStart);
// }
// console.log(sol2([0,1,1,0]))
// console.log(sol2([0, 1, 1, 0, 0, 0, 0, 0]))
// console.log(0%2)



