//dependencies
const Tesseract = require('tesseract.js')
const fs = require("fs");
const fileExtension = require('file-extension');
const Jimp = require('jimp');

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
//function that removes "\n" from the split string

// remove = (x) => {
//     if()
// }

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
let referenceNumbers = [];
let = lineBreakFree =[]
//loops through myImage array and parses png to txt files
for (i = 0; i < myImage.length; i++) {
    Tesseract.recognize(`./${directory}/holderfolder/${myImage[i]}.png`)
        .then(function (result) {
            // console.log( typeof (result.text))
            console.log(result.text)
            console.log(typeof(result.text))

            //splits string output of tesseract into an array
            let split = (result.text).split("\n")
            split.forEach( line =>{
                if( line.includes("Reference:")){
                    console.log("line",line)
                    let splitLine = line.split(": ")
                    console.log("splitLine", splitLine);
                    let referenceNumber = splitLine[splitLine.length-1];
                    console.log("ref num", referenceNumber)
                }
            } )
            console.log("split", split)
            // for (i = 0;i<split.length;i++){
            //     if (split[i].includes("\n")) {
            //         console.log("contains line break")
            //            let linebreak = split[i].split("\n");
            //            lineBreakFree.push(linebreak);
            //         }
            //     else{
            //         lineBreakFree.push(split[i])
            //     }
            // }
            console.log("new array without line breaks (\n)",lineBreakFree)
            // split = split.map(w => w.replace('\n', ' '));
            //loops through array to pull out reference numbers
            for (i = 0; i < lineBreakFree.length; i++) {
                if (lineBreakFree.length == 8 && isInt(split[i])) {
                    referenceNumbers.push(split[i])

                }
            }
            console.log("finished one doc")
            //logs reference numbers found
            console.log(referenceNumbers)
            // console.log("split[i]",split)
        })
};

// process.exit()