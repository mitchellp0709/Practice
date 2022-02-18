let basePay = 33.63
let MonFriPM = 33.88
let SunThuON = 39.88
let SatSunBase = 33.88
let SatSunPM = 39.88
let FriSatON = 40.88


let weekOneHours = 1
let weekTwoHours = 1

let weekOnePay = 0
let weekTwoPay = 0





const pay = (day, hours, bonus) => {
  //sunday 12: 1042.52 or 478.56
  if (day === 'sunday' || day === "Sunday") {
    const rate = {
      pay: SatSunPM,
      overtime: false,
      bonus: bonus,
      bonusGiven: false
    }

    for (let i = 0; i < hours; i++){
      if (i > 4) {
        rate.pay = SunThuON;
        rate.bonusGiven = false
      }
      if (rate.bonus === true && rate.bonusGiven===false) {
        rate.pay += 47
        rate.bonusGiven=true
      }
      if (weekOneHours > 40 && rate.overtime==false) {
        rate.pay = rate.pay * 1.5
        rate.overtime = true
      }
      weekOnePay += rate.pay
      weekOneHours++

    }
  }












  
  return weekOnePay
}

console.log(pay('sunday',12,false))
