// to run, go into a terminal
// and run with...
// node parser.js 
const fs = require("fs")
const csv = require("csv-parse")

const input = "NameVoyager-2017a.txt"

fs.readFile(input, (err, contents) => {
  csv(contents, {
    columns: true,
    delimiter: "\t",
  }, (err, results) => {
    const output = results.map(r => {
      return {
        name: r["Name"],
        sex: (r["sex"] == "F" ? "female" : "male"),
        rank: ["1880", "1890", "1990", "1910", "1920", "1930", "1940", "1950", "1960", "1970", "1980", "1990", "2008", "2010"].map(y => {
          return parseInt(r[y + "R"], 10)
        })
      }
    }).filter(o => {
      return o.rank.reduce((total, num) => total + num, 0) > 0
    })

    fs.writeFile("data.js", `let data = ${JSON.stringify(output, null, 2)}`, () => {})
    fs.writeFile("data.min.js", `let data = ${JSON.stringify(output)}`, () => {})
  })
})