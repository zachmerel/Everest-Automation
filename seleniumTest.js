// require('./.env').config
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    Keys = webdriver.Key,
    until = webdriver.until;
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

const enterPassword = () => {
    driver.findElement(By.name('username')).sendKeys('je773425');
    driver.findElement(By.name('password')).sendKeys('Vologda85');
    driver.findElement(By.name('cmdSubmit')).sendKeys(Keys.ENTER);
}

driver.get('https://www.budexchange.com/dana-na/auth/url_17/welcome.cgi');
driver.wait(until.alertIsPresent()).then(() => { driver.switchTo().alert().accept(); });
driver.sleep(5000)
enterPassword();
// driver.navigate.windows(windowHandle)
// driver.findElement(By.name('username')).sendKeys('je773425');
// driver.findElement(By.name('password')).sendKeys('Vologda85');
// driver.findElement(By.name('cmdSubmit')).sendKeys(Keys.ENTER);
// driver.wait(2000);



// function check_title() {
//     let promise = driver.getTitle().then( function(title){
//         if(title === 'wiki - Google Search'){
//             console.log('success');
//             return true;
//         }
//         else{
//             console.log('fail --' + title);
//         }
//     });
//     return promise
// }