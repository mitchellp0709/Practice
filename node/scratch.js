// const ingredients = []

// //ingredients = ["1", "kg", "chicken"]

// ingredients.push("1")
// ingredients.push("kg")
// ingredients.push("chicken")
// console.log(ingredients)
// console.log(ingredients.join(' '))

// const final = []
// final.push(ingredients.join(' '))
// console.log(final)


const fullUrl = ["https://api.spoonacular.com/recipes/findByIngredients?ingredients="]
const fullApiKey = "&apiKey=58b7f91d4b5e4caa8919e0f7bd122b71";


const ing1 = "apples"
const ing2 = "sugar"
const ing3 = ""
const ing4 = "flour"
const ing5=""
const all = []
all.push(ing1)
  all.push(ing2)
  all.push(ing3)
  all.push(ing4)
  all.push(ing5)


for (let x of all) {
  if (x.length > 0) {
    fullUrl.push(",+")
    fullUrl.push(x)
  }
}
fullUrl.push("&number=5")
fullUrl.push(fullApiKey)
const final = fullUrl.join('')
console.log(final)