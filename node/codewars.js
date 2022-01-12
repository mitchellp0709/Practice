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

console.log(paul(['life','eating','life']))