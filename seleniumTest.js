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

const closeAlert = () => {
    driver.wait(until.alertIsPresent()).then(() => { driver.switchTo().alert().accept(); });
}

driver.get('https://www.budexchange.com/dana-na/auth/url_17/welcome.cgi');
closeAlert();



//Open portal Promise trying to make a promise so that once the alert has been closed I'm able to enter in the password and not before then.
const openPortal = new Promise(
    function (resolve, reject) {
        if(//need a call back to the close alert function to make sure its been executed?//){

        }else{
            console.log("not working")
        }


        );
// driver.wait(until.alertIsPresent()).then(() => { driver.switchTo().alert().accept(); });
// console.log("this is the alert getting reconized and closed")
    
// driver.wait(until.alertIsPresent(1)).then(() => enterPassword());
// console.log("this is when I try to pass the username and password in and press enter")





// driver.sleep(5000)
// enterPassword();
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