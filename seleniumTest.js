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
const enterPassword = async () => {
    console.log("this is where the password is entered")
    await driver.findElement(By.name('username')).sendKeys('je773425');
    await driver.findElement(By.name('password')).sendKeys('Everest2019');
    await driver.findElement(By.name('cmdSubmit')).sendKeys(Keys.ENTER);
}

//switches window to alert and accepts it
const closeAlert = async () => {
    console.log("this is where the alert gets closed")
    await driver.wait(until.alertIsPresent())
    await driver.switchTo().alert().accept();

}

//gets to the carrier communcation page
const carrierCommunication = () => {
  driver.get('https://www.budexchange.com/BalanceDue/,DanaInfo=.a184C65F999JAG+BalanceDueSearch.aspx')
}

//enters in the reference number for the load
const referenceInput = async () => {
 await driver.findElement(By.name('txtSearchBy')).sendKeys('24343767')
 await driver.findElement(By.name('searchButton')).sendKeys(Keys.ENTER);
 await driver.findElement(By.name('rptBalDues:_ctl1:btnShowDetails')).sendKeys(Keys.ENTER);

}
//opens the portal initially
const openPortal = async () => {
   await driver.get('https://www.budexchange.com/dana-na/auth/url_17/welcome.cgi');
    // driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
}

const app = async () => {
  await login();
  console.log('done');
}

async function login() {
  await closeAlert();
  await enterPassword();
  await carrierCommunication();
  await referenceInput();
}

openPortal();

Promise.resolve(app()).then(() => {
  
})
