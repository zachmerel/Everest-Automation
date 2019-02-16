let fs = require('fs'),
PDFParser = require("pdf2json");


// let pdfFilePath = "Everest-Automation/temptest1/140654_4.pdf";
// function loadPDF(pdfFilePath)
// loadPDF();

// console.log(pdfFilePath)


let pdfParser = new PDFParser();
// console.log("pdfParser",pdfParser);
// console.log("this",this)

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    // console.log(pdfData)
// fs.writeFile("./temptest1/140654_4.pdf.json", JSON.stringify(pdfData));
fs.writeFile("./temptest1/142661_4.json", JSON.stringify(pdfData), (err) => {
    if (err) throw err;
    // console.log('The file has been saved!');
  });
});

// pdfParser.loadPDF("./temptest1/142661_4.pdf");

let pdfParser = new PDFParser(this,1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
fs.writeFile("./temptest1/142661_4.txt", pdfParser.getRawTextContent(pdfData), (err) => {
        if (err) throw err;
        // console.log('The file has been saved!');
      });
});

pdfParser.loadPDF("./temptest1/142661_4.pdf");