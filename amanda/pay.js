let basePay = 33.63;
let MonFriPM = 33.88;
let SunThuON = 39.88;
let SatSunBase = 33.88;
let SatSunPM = 39.88;
let FriSatON = 40.88;

let weekOneHours = 1;
let weekTwoHours = 1;

let weekOnePay = 0;
let weekTwoPay = 0;

const pay = (day, hours, bonus) => {
  //sunday 12: 1042.52 or 478.56
  if (day === "sunday" || day === "Sunday") {
    const rate = {
      pay: SatSunPM,
      overtime: false,
      bonus: bonus,
      bonusGiven: false,
    };

    for (let i = 0; i < hours; i++) {
      if (i > 4) {
        rate.pay = SunThuON;
        rate.bonusGiven = false;
      }
      if (rate.bonus === true && rate.bonusGiven === false) {
        rate.pay += 47;
        rate.bonusGiven = true;
      }
      if (weekOneHours > 40 && rate.overtime == false) {
        rate.pay = rate.pay * 1.5;
        rate.overtime = true;
      }
      console.log(rate.pay);
      weekOnePay += rate.pay;
      weekOneHours++;
    }
  }

  if (
    day === "monday" ||
    day === "Monday" ||
    day === "tuesday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "wednesday" ||
    day === "Thursday" ||
    day === "thursday"
  ) {
    const rate = {
      pay: MonFriPM,
      overtime: false,
      bonus: bonus,
      bonusGiven: false,
    };

    for (let i = 0; i < hours; i++) {
      //1018.56 or 454.56
      if (i > 3) {
        rate.pay = SunThuON;
        rate.bonusGiven = false;
      }
      if (rate.bonus === true && rate.bonusGiven === false) {
        rate.pay += 47;
        rate.bonusGiven = true;
      }
      if (weekOneHours > 40 && rate.overtime == false) {
        rate.pay = rate.pay * 1.5;
        rate.overtime = true;
      }
      console.log(rate.pay);
      weekOnePay += rate.pay;
      weekOneHours++;
    }
  }

  if (day === "friday" || day === "Friday") {
    const rate = {
      pay: MonFriPM,
      overtime: false,
      bonus: bonus,
      bonusGiven: false,
    };

    for (let i = 0; i < hours; i++) {
      if (i > 4) {
        rate.pay = FriSatON;
        rate.bonusGiven = false;
      }
      if (rate.bonus === true && rate.bonusGiven === false) {
        rate.pay += 47;
        rate.bonusGiven = true;
      }
      if (weekOneHours > 40 && rate.overtime == false) {
        rate.pay = rate.pay * 1.5;
        rate.overtime = true;
      }
      console.log(rate.pay);
      weekOnePay += rate.pay;
      weekOneHours++;
    }
  }

  if (day === "saturday" || day === "Saturday") {
    const rate = {
      pay: SatSunPM,
      overtime: false,
      bonus: bonus,
      bonusGiven: false,
    };

    for (let i = 0; i < hours; i++) {
      if (i > 4) {
        rate.pay = FriSatON;
        rate.bonusGiven = false;
      }
      if (rate.bonus === true && rate.bonusGiven === false) {
        rate.pay += 47;
        rate.bonusGiven = true;
      }
      if (weekOneHours > 40 && rate.overtime == false) {
        rate.pay = rate.pay * 1.5;
        rate.overtime = true;
      }
      console.log(rate.pay);
      weekOnePay += rate.pay;
      weekOneHours++;
    }
  }

  return weekOnePay;
};

console.log(pay("saturday", 12, false));
