const { includeIndex } = require("./Utilities.js")
const getDescription = (lines) => {
  const endingIndex = lines.findIndex((el) => el.startsWith("Archive:"))
  return lines.splice(1, endingIndex - 1).join("\n")
}
const getDetails = (lines) => {
  const detailsIndex = includeIndex(lines, "Details: ")
  return lines[detailsIndex].replace("Details:", "").trim()
}
const getArchive = (lines) => {
  const archiveIndex = includeIndex(lines, "Archive: ")
  return lines[archiveIndex].replace("Archive:", "").trim()
}

const getFilesInfo = (lines) => {
  const files = []
  const filesIndex = includeIndex(lines, "Details: ") + 1
  const fileLines = lines.splice(filesIndex).map((line) => {
    return line
      .split(" ")
      .filter((v) => v.indexOf(" ") < 0)
      .filter((v) => !!v)
  })
  fileLines.splice(-2)
  fileLines.splice(0, 2)
  console.log(fileLines)
  for (var fileIndex = 0; fileIndex < fileLines.length; fileIndex++) {
    files.push({
      Attribute: fileLines[fileIndex].shift(),
      Size: fileLines[fileIndex].shift(),
      Data: fileLines[fileIndex].shift(),
      Time: fileLines[fileIndex].shift(),
      Name: fileLines[fileIndex].join(" "),
    })
  }
  return files
}
module.exports = async (stdout) => {
  const lines = stdout.split("\r\n").filter((v) => !!v)
  const data = {
    metaData: lines[0],
    description: getDescription(lines),
    archive: getArchive(lines),
    details: getDetails(lines),
    files: getFilesInfo(lines),
  }
  return data
}
