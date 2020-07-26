const includeIndex = (array, query) => {
  return array.findIndex((v) => v.includes(query))
}

module.exports = {
  includeIndex,
}
