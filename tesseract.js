const Tesseract = require('tesseract.js')

let myImage = ["./temp v1/143559 3_Page_2.png", "141848_4.png"]

for (i = 0; i < myImage.length; i++) {
    Tesseract.recognize(myImage[i])
        .then(function (result) {
            // console.log( typeof (result.text))
            // console.log(result.text)
            let split = (result.text).split(" ")
            for (i = 0; i < split.length; i++) {
                if (split[i].length == 8 && !isNaN(split[i])) {
                    console.log(split[i])
                }
            }
            // console.log("split[i]",split)
        })
};
