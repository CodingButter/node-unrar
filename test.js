const unrar = require("./index.js")
;(async () => {
  console.log(await unrar.list(__dirname + "/test.rar"))
})()
