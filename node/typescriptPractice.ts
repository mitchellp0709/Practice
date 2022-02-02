// const firstName: string = "Mitchell"

// const age: number = 50


// const increment = (counterVal:number) => {
//   return counterVal +1
// }

// const counter: number = increment(10)

// console.log(counter)

// let num: number = 5;
// console.log(num)
// num = 6;
// console.log(num)


// const bool: boolean = false;
// console.log(bool)


/////////////////////////////
// Expressions
/////////////////////////////

let num: number 
num = 5 + 5+5
console.log(num)

let myString: string

//concatenation
myString = "five" + "cheese"
console.log(myString)
myString = `${num} cheese`
console.log(myString)



///////////////////////////
// Conditionals
///////////////////////////

let cheese2: string
const value:string = "expensive"

// switch (value) {
//   case "expensive":
//     cheese2 = "manchego"
//     console.log(cheese2)
//     break
//   case "medium":
//     cheese2 = "gouda"
//     console.log(cheese2);
//     break
// }


// let cheese3: string
// cheese3 = value === "expensive" ? "manchego" : "american"

// console.log(cheese3)

const myArran: Array<object> = [
  {
    a: "a",
    b: "b",
  },
  {
    c: "c",
    d: "d",
  },
];

console.log(myArran[0])

interface StudentInterface {
  name: String,
  age:Number
}

const Tim: StudentInterface = {
  name: "Tim",
  age: 14
}
console.log(Tim.name)