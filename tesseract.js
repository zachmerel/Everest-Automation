const Tesseract = require('tesseract.js')

let myImage = "141848_4.png"
let testArray = [];
let referenceNum = [];

Tesseract.recognize(myImage)
    .then(function (result) {
        console.log( typeof (result.text))
        console.log(result.text)
        // testArray.push(result.text)
        let split = (result.text).split(" ")
        for(i=0; i < split.length; i++){
            // console.log("splitpiece",split[i])
            if(split[i].length == 8){
                console.log(split[i])
            }
        }
        // console.log("split[i]",split)
    })

