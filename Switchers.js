const { switchers } = require("./CommandSwitches.json")

module.exports = (switches) => {
  tmp_array = []
  Object.keys(switches).forEach((key) => {
    var tmp = `${switchers[key]} "${switches[key]}"`
    if (Array.isArray(switches[key])) {
      tmp = `${switchers[key]} ['${switches[key].join("' '")}']`
    }
    if (switches[key] === false) {
      tmp = switchers[key]
      if (Array.isArray(switchers[key])) tmp = switchers[key][1]
    } else if (switches[key] === true) {
      tmp = switchers[key]
      if (Array.isArray(switchers[key])) tmp = switchers[key][0]
    }

    tmp_array.push("-" + tmp)
  })
  return tmp_array.join(" ")
}
