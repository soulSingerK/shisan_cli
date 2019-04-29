const download = require('download-git-repo')
const path = require('path')

const DOWNLOADURL = 'direct:https://github.com/soulSingerK/shisan.underscore.git#master'

module.exports = function (target) {
  target = path.join(target || '.')
  console.log(`${target} in download`)
  return new Promise((resolve, reject) => {
    download(DOWNLOADURL, target, { clone: true }, err => {
      if (err) {
        reject(err)
      } else {
        resolve(target)
      }
    })
  })
}