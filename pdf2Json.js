const fs = require('fs'),
PDFParser = require("pdf2json");

// function loadPDF(pdfFilePath)
let filePath = "Everest-Automation/temptest1/140654-4.pdf"
let pdfParser = new PDFParser(filePath);
console.log(pdfParser)

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
fs.writeFile("Everest-Automation.json", JSON.stringify(pdfData));
});


let pdf = pdfParser.loadPDF("Everest-Automation/temptest1/140654-4.pdf");
console.log(pdf)