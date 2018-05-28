function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var emptyArray = []

  for (var i = 0; i < arrayOfMusicians.length; i ++) {
    emptyArray.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`)
  }

  return emptyArray
}
