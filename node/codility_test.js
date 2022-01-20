// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
  A.sort((x, y) => x - y)
  if (Math.max(...A) <= 0) {
    return 1;
  }

  
  for (let i = 1; i < A.length;i++) {
    
    if (A[i] > 0 && A[i] - A[i - 1] > 1) {
      return A[i-1]+1
    }
  }
  return A[a.length-1]+1
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1,-3]));
