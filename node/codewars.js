// //https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript

// function paul(x) {
//   let score = 0;
//   for (y of x) {
    
//     if (y === "kata") {
//       score+=5
//     }
//     if (y === "Petes kata") {
//       score+=10
//     }
//     if (y === "eating") {
//       score+=1
//     }
//   }

//   if (score > 100) {
//   return 'Miserable!'
//   } else if (score >= 70) {
//     return 'Sad!'
//   } else if (score >= 40) {
//     return 'Happy!'
// } else {return 'Super happy!'}
 

// }

// //https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

// function countSheeps(arrayOfSheep) {
//   let count = 0;
//   for (x of arrayOfSheep) {
//     if (x == true) {
//      count++
//    }
//   }
//   return count
// }

// // https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// function sumTwoSmallestNumbers(numbers) {
//   const s = numbers.sort((a,b)=>{return a-b});
//   console.log(s)
//   return s[0] + s[1];
// }
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));


// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

// function findUniq(arr) {
//   for (let i = 1; i < arr.length; i++){
//     if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
//       return arr[i]
//     }
//   }
//   return arr[0]
// }

// console.log(findUniq([1, 1, 1, 2, 1, 1]));
