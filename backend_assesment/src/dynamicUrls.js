const puppeteer = require("puppeteer")

const dynamicUrls = async(pageUrl)=> {
    const browsing  =await  puppeteer.launch()
    const page = await browsing.newPage() ; 
    
    
    await page.goto(pageUrl,{waitUntil: 'networkidle2' }) 

    let previousHeight 
    while (true) {
        previousHeight =  await page.evaluate('document.body.scrollHeight')
        await page.evaluate('window.scrollTo(0,document.body.scrollHeight)'); 
        await new Promise(resolve => setTimeout(resolve, 2000));

        const currentPageHeight=  await page.evaluate('document.body.scrollHeight')
        if (currentPageHeight===previousHeight) break 
    }

    const links = await page.evaluate(()=> 
        Array.from(document.querySelectorAll('a[href*= "/product"], a[href*="/item"], a[href*="/p/"]'),(a)=>a.href) 
    ); 
    (await browsing).close(); 
    return [...new Set(links)]
}

module.exports = {dynamicUrls}