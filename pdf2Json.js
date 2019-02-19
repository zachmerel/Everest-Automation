// let fs = require('fs'),
// PDFParser = require("pdf2json");

// let pdfParser = new PDFParser();

// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
// pdfParser.on("pdfParser_dataReady", pdfData => {
// fs.writeFile("Everest-Automation/temptest1/140654-4.json", JSON.stringify(pdfData));
// });

// pdfParser.loadPDF("Everest-Automation/temptest1/140654-4.pdf");
 isInt = (n) => {
    return n % 1 === 0;
 }

var num = 25121.57  
var typeOf = (typeof(num))
console.log(typeOf)

if(!isNaN(num) && isInt(num)) {
    console.log("true")
}
else{
    console.log("false")
}