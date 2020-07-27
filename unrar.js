const os = require("os")
const { exec } = require("child_process")
const { commands } = require("./CommandSwitches.json")
const stringifySwitches = require("./Switchers.js")

const osCommand = {
  Windows_NT: __dirname + "/unrar.exe",
  Linux: "unrar",
}

const cmd = async (command, file, switches) => {
  const commandString = `${osCommand[os.type()]} ${commands[command]} ${
    switches ? stringifySwitches(switches) + " " : ""
  }"${file}"`

  return new Promise((resolve, reject) => {
    exec(commandString, (error, stdout, stderr) => {
      if (error) reject(error)
      resolve(stdout)
    })
  })
}

module.exports = cmd
