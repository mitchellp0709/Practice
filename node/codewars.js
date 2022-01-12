//https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript

function paul(x) {
  let score = 0;
  for (y of x) {
    
    if (y === "kata") {
      score+=5
    }
    if (y === "Petes kata") {
      score+=10
    }
    if (y === "eating") {
      score+=1
    }
  }

  if (score > 100) {
  return 'Miserable!'
  } else if (score >= 70) {
    return 'Sad!'
  } else if (score >= 40) {
    return 'Happy!'
} else {return 'Super happy!'}
 

}

//

function countSheeps(arrayOfSheep) {
  let count = 0;
  for (x of arrayOfSheep) {
    if (x == true) {
     count++
   }
  }
  return count
}

