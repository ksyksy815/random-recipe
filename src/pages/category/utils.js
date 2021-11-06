export const assembleIngredientsAndMeasures = (recipe) => {
  let ingre = []
  let measure = []
  for (let key in recipe) {
    if (key.includes("Ingredient") && recipe[key] !== "" && recipe[key] !== null) {
      ingre.push(recipe[key])
    }

    if (key.includes("Measure") && recipe[key] !== "" && recipe[key] !== null) {
      measure.push(recipe[key])
    }
  }

  const combined = ingre.map((item, index) => `${item}: ${measure[index]}`)
  
  return combined
}

export const getInstructionsInArray = (str) => {
  return str.split(/\r\n/g)
}