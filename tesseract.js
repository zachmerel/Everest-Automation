//dependencies
const Tesseract = require('tesseract.js')
const fs = require("fs");
const fileExtension = require('file-extension');

//directory of invoices 
let directory = "invoiceMergeTest";

// //array of pngs to be parsed
let myImage = []
//reads through directory 
let files = fs.readdirSync(directory);

//loops through directory to find all pngs and push them to myImage array.
for (i = 0; i < files.length; i++) {
    let extType = fileExtension(files[i])
    console.log("extTYpe:",extType);
    console.log(files[i])
    if(extType === "png"){
        myImage.push(files[i])
    }
};


console.log("myImage", myImage)
// //array of reference numbers that need to be checked
// let referenceNumbers = [];
// //loops through myImage array and parses png to txt files
// for (i = 0; i < myImage.length; i++) {
//     Tesseract.recognize(myImage[i])
//         .then(function (result) {
//             // console.log( typeof (result.text))
//             // console.log(result.text)
//             //splits string output of tesseract into an array
//             let split = (result.text).split(" ")
//             //loops through array to pull out reference numbers
//             for (i = 0; i < split.length; i++) {
//                 if (split[i].length == 8 && !isNaN(split[i])) {
//                     referenceNumbers.push(split[i])
                    
//                 }
//             }
//             //logs reference numbers found
//             console.log(referenceNumbers)
//             // console.log("split[i]",split)
//         })
// };

// process.exit()