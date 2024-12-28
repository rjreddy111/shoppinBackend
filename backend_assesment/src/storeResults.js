const fs = require('fs')
const path = require("path")

const storeResults = (domain,urls)=> {
    const results = {[domain]: urls} ; 
    const filePath = path.join(__dirname,`${domain}_urls.json`)
    fs.writeFileSync(filePath, JSON.stringify(results,null,2));
    console.log(`Results saved to ${domain}_urls.json`)

}

module.exports = {storeResults}