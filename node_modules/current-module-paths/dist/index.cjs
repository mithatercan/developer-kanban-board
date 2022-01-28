const { fileURLToPath } = require('url')
const path = require('path')

function getModulePaths (fileURL) {
  const __filename = fileURLToPath(fileURL)
  const __dirname = path.dirname(__filename)
  return { __filename, __dirname }
}

module.exports = getModulePaths
