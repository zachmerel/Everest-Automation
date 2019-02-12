let fs = require('fs'),
PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
fs.writeFile("Everest-Automation/temptest1/140654-4.json", JSON.stringify(pdfData));
});

pdfParser.loadPDF("Everest-Automation/temptest1/140654-4.pdf");