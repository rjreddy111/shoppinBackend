const {discoverUrls} = require("./discoverUrls")

const { dynamicUrls } = require("./dynamicUrls")
const {storeResults} = require("./storeResults") 


const server = async()=> {
    try {
    const staticUrls = await discoverUrls('https://books.toscrape.com/') 
    const discoverDynamicUrls = await dynamicUrls('https://books.toscrape.com/catalogue/category/books/travel_2/index.html') 
    const allUrls = [...staticUrls, ...discoverDynamicUrls] 
    storeResults('books.toscrape.com', allUrls)
    console.log(`crawled and stored ${allUrls.length} urls successfully `)
    
    }
    catch(error){
        console.log(`Error during crawling, ${error.message}`)
    }


}


server()
