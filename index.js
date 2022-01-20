// function readsTheData(){

// const fs = require('fs')
// const data = fs.readFileSync('data.json',"utf-8")
// return data
// }
// console.log(readsTheData())

function readsTheData(){

    const fs = require('fs')
    fs.readFile('data.json', (err, data) => {
      if (err) throw err 
      console.log(data.toString("utf-8"))
})
}
readsTheData()