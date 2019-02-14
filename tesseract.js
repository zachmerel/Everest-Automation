const Tesseract = require('tesseract.js')

let myImage = "141848_4.png"


Tesseract.recognize(myImage)
.then(function(result){
    console.log(result.text)
})