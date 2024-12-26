 
const cherio = require("cheerio")

const discoverUrls = async(pageUrl)=> {
    try {
        const res = await fetch (pageUrl); 
       
        if (!res.ok){ 
            throw new Error (`Failed to fetch ${pageUrl} : ${res.statusText} `)
        }
        const html = await res.text() 
       
        const $ = cherio.load(html) 
        const links = []; 
        

        $('a').each((_,element)=> {
            const href = $(element).attr('href'); 
            console.log(href)
            
            if (href && !href.startsWith("#")) {
              
                links.push(new URL(href,pageUrl).href) 
                
            }
        }); 
       
      
        return [... new Set(links)]
    }
    catch(error) {
        console.log(`Error message: ${error.message}`)
        return []


    }
}

module.exports = {discoverUrls}