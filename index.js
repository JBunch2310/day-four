function readTheFile(){

const fs = require('fs')
const data = fs.readFileSync('data-json.json','utf-8')
return data
}
console.log(readTheFile())
