//dependencies
const Tesseract = require('tesseract.js')
const fs = require("fs");
const fileExtension = require('file-extension');
//directory of invoices 
let directory = "everestInvoices";

// //array of pngs to be parsed
let myImage = []
//reads through directory 
let files = fs.readdirSync(directory);
// console.log(files)

//function that determines if 8 didgit number is an integer (making it a true reference number)
isInt = (n) => {
    return n % 1 === 0;
}
//loops through directory to find all pngs and push them to myImage array.
for (i = 0; i < files.length; i++) {
    let extType = fileExtension(files[i])
    // console.log("extTYpe:",extType);
    // console.log(files[i])
    if (extType === "png") {
        myImage.push(files[i])
    }
};
//array of reference numbers that need to be checked
let referenceNumbers = {};
let = lineBreakFree =[]
//loops through myImage array and parses png to txt files
for (i = 0; i < myImage.length; i++) {
    let everestInvName = myImage[i];
    Tesseract.recognize(`./${directory}/holderfolder/${myImage[i]}.png`)
        .then(function (result) {
            // console.log( typeof (result.text))
            console.log(result.text)
            console.log(typeof(result.text))
            //splits string output of tesseract into an array
            let split = (result.text).split("\n")
            split.forEach( line =>{ 
                if( line.includes("Reference:")){
                    // console.log("line",line)
                    let splitLine = line.split(": ")
                    // console.log("splitLine", splitLine);
                    let referenceNumber = splitLine[splitLine.length-1];
                    console.log("ref num", referenceNumber)
                    if(referenceNumber.includes("I")){
                        let secondSplit = referenceNumber.split(" I");
                        let sixDidgitRefNum = secondSplit[0];
                        // referenceNumbers.push(sixDidgitRefNum);
                        referenceNumbers[everestInvName] = sixDidgitRefNum
                    }else{
                    // referenceNumbers.push(referenceNumber);
                    referenceNumbers[everestInvName] = referenceNumber
                    }
                }
                //start code to look invoice total
                // if( line.includes('Invoice Total: '))
            } )
            console.log(referenceNumbers)
            // console.log("split[i]",split)
        })
        //exporting referenceNumbers object so I can use them with selenium
        module.exports = {referenceNumbers};
};
// process.exit()