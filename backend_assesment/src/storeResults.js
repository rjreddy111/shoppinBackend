const fs = require('fs')


const storeResults = (domain,urls)=> {
    const results = {[domain]: urls} ; 
    fs.writeFileSync(`${domain}_urls.json`, JSON.stringify(results,null,2));
    console.log(`Results saved to ${domain}_urls.json`)

}

module.exports = {storeResults}