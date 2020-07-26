const parseOutput = require("./OutputParser")
const cmd = require("./unrar")
const extract = async (file, switches) => {
  return await cmd("extract", file, switches)
}
const list = async (file, switches) => {
  return await parseOutput(await cmd("list", file, switches))
}
const test = async (file, switches) => {
  return await cmd("test", file, switches)
}
const verbosely = async (file, switches) => {
  return await cmd("verbosely", file, switches)
}

module.exports = {
  extract,
  list,
  test,
  verbosely,
}
