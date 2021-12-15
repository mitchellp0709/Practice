//https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true&h_r=next-challenge&h_v=zen



function simpleArraySum(ar) {
  let count = 0;
  for (let x of ar) {
    count += x;
  }
  return count;
}

//console.log(simpleArraySum([]))



//https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen



function compareTriplets(a, b) {
  let scores=[0,0]
  for (let i = 0; i < a.length; i++){
    if (a[i] > b[i]) {
      scores[0]+=1
    }
    if (b[i] > a[i]) {
      scores[1] += 1;
    }
  }
return scores

}

//console.log(compareTriplets([1,2,3],[3,2,1]))


// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function aVeryBigSum(ar) {
  let total = 0;
  for (let x of ar) {
    total+=x
  }
  return total
}


// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen


function diagonalDifference(arr) {
  
  let d1 = 0;
  let d2 = 0;

  for (let i = 0; i < arr.length; i++){
    
    for (let j = 0; j < arr.length; j++){
      if (i === j) {
        d1+= arr[i][j]
      }
      if (i === arr.length - j - 1) {
        d2 +=arr[i][j]
      }
    }

    


  }
return Math.abs(d1 - d2);

}

// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function plusMinus(arr) {
  let posCount = 0;
  let negCount = 0;
  let zeroCount = 0;


  for (let x of arr) {
    if (x > 0) {
      posCount += 1;
    }
    if (x < 0) {
      negCount += 1;
    } else {
      zeroCount += 1;
    }
  }
  let posRatio = (posCount / (arr.length)).toFixed(4)
  let negRatio = (negCount / arr.length).toFixed(4);
  let zeroRatio = (zeroCount / arr.length).toFixed(4);
  return [posRatio, negRatio, zeroRatio]
  

}


// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen


// function staircase(n) {
 
  
//   for (let i = 1; i <= n; i++) {
//     let line = "";
//     for (let s = n - 1; s >= i; s--){
//       line += " ";
//     }

//     for (let hash = 1; hash <= i; hash++){
//       line+="#"
//     }
//     console.log(line);
    
//   }

// }

function staircase(n) {
  for (let i = 1; i <= n; i++){
    console.log(" ".repeat(n-i)+ "#".repeat(i))
  }
}

staircase(5)


// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function miniMaxSum(arr) {
  newArr = arr.sort()
  let minSum = 0;
  let maxSum = 0;
  for (let x = 0; x < newArr.length-1; x++){
    minSum+=newArr[x]
  }
  for (let x = 1; x < newArr.length; x++) {
    maxSum += newArr[x];
  }
   return [minSum,maxSum]
}
console.log(miniMaxSum([2,1,3,4,5]))