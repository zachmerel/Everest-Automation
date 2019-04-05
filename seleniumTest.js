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
const driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();



//opens the portal initially
const openPortal = async () => {
  await driver.get('https://www.budexchange.com/dana-na/auth/url_17/welcome.cgi');
}

//switches window to alert and accepts it
const closeAlert = async () => {
  console.log("this is where the alert gets closed")
  await driver.wait(until.alertIsPresent())
  await driver.switchTo().alert().accept();

}

//enters username, password, hits enter
const enterPassword = async () => {
  console.log("this is where the password is entered")
  await driver.findElement(By.name('username')).sendKeys('je773425');
  await driver.findElement(By.name('password')).sendKeys('Everest2019');
  await driver.findElement(By.name('cmdSubmit')).sendKeys(Keys.ENTER);
}

//gets to the carrier communcation page
const carrierCommunication = () => {
  driver.get('https://www.budexchange.com/BalanceDue/,DanaInfo=.a184C65F999JAG+BalanceDueSearch.aspx')
}

//enters in the reference number for the load
const referenceInput = async (testArray) => { 
  //test array to figure out looping through reference numbers
 testArray = ['24342989', '304731', '24343767']
testArray.array.forEach(async(element) => {
  
});
  await func(driver.findElement(By.name('txtSearchBy')).sendKeys(testArray[i]))
  await driver.findElement(By.name('searchButton')).sendKeys(Keys.ENTER);
  await driver.findElement(By.name('rptBalDues:_ctl1:btnShowDetails')).sendKeys(Keys.ENTER);
 }
}

//async function that opens that waits for the login function
const app = async () => {
  await login();
  console.log('done');
}

// for (i = 0; i < testArray.length; i++) {
  async function login(testArray) {
    await closeAlert();
    await enterPassword();
    await carrierCommunication();
    await referenceInput();
  }
// }
//calls the open portal function
openPortal();

Promise.resolve(app()).then(() => {

})
