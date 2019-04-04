// dependencies
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    Keys = webdriver.Key,
    until = webdriver.until;
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;


//so I don't have to have path on computer
const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

//allows the use of webdriver
var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();


//enters username, password, hits enter
const enterPassword = () => {
    console.log("this is where the password is entered")
    driver.findElement(By.name('username')).sendKeys('je773425');
    driver.findElement(By.name('password')).sendKeys('Everest2019');
    driver.findElement(By.name('cmdSubmit')).sendKeys(Keys.ENTER);
}

//switches window to alert and accepts it
const closeAlert = async () => {
    console.log("this is where the alert gets closed")
    await driver.wait(until.alertIsPresent())
    await driver.switchTo().alert().accept();

}

//switches back to main window
const mainWindow = () => {
    console.log("this is where we switch back to the main page")
    driver.switchTo().defaultContent()
}


const openPortal = () => {
    driver.get('https://www.budexchange.com/dana-na/auth/url_17/welcome.cgi');
    // driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
}

const app = async () => {
  await login();
  console.log('done');
}

async function login() {
  await closeAlert();
  await enterPassword();
}

openPortal();

Promise.resolve(app()).then(() => {
  
})
