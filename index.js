function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var emptyArray = []

  for (var i = 0; i < arrayOfMusicians.length; i ++) {
    emptyArray.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`)
  }

  return emptyArray
}

function johnLennonFacts(arrayOfJohnLennonFacts) {
  var newFacts = []
  var i = 0

  while (i < arrayOfJohnLennonFacts.length) {
    newFacts.push(`${arrayOfJohnLennonFacts[i]}!!!`)
    i++
  }
  return newFacts
}
