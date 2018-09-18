//photo页的ui测试,主要是不同设备的响应式效果测试
const puppeteer = require('puppeteer')
const devices = require('puppeteer/DeviceDescriptors')
const launchOptions = {
	// headless: false,
	executablePath: "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"
}

const agents = ['iPhone X','iPhone 6','iPhone 6 Plus','iPad','iPad Mini','iPad Pro']


async function run(){
  for(let i=0;i< agents.length; i++){
    const agent  = agents[i]
    const device = devices[agent]
    const browser = await puppeteer.launch(launchOptions)
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:8081/#/photo/')

    await page.emulate(device)
    await page.screenshot({
      path: './test/ui/specs/front/pdf/'+ agent.replace(' ','-') +'-photo.png'
    })
    await browser.close()

  }

}
run()
