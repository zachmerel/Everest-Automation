const fs = require("fs");

const loDash = require("lodash");

// const xlsx = require("xlsx");
//declares the folder where the files are being read
 let directory = "test_invoices";
//reads the filenames in the folder
 let files = fs.readdirSync(directory);
 //creates array to put edited filenames in
 let noExtensions = []
//for loop cycles through the filenames read
for(i=0; i< files.length; i++){
    //removes the extension from file name but leaves page indicator (3 or 5)
    // let extfree = files[i].substring(0, files[i].lastIndexOf("."));
    //removes the extension from file name and page indicator (3 or 5)
    let extfree = files[i].substring(0, 6);
    
    
    //pushes edited file names to noExtensions array
    noExtensions.push(extfree);
    // console.log(noExtensions);
};

let duplicateFree = loDash.sortedUniq(noExtensions);
console.log(duplicateFree)
//function to write to batches workbook?
XLSX.writeFile(wb, "Batches-Sent-to-RTS-List", write_opts);
//link to sheetjs docs
//https://sheetjs.gitbooks.io/docs/demos/demos/#interface
//this will import an array of array to a certain area of a work sheet
// XLSX.utils.sheet_add_aoa(<----this is where the batches sheet path goes?---->, duplicateFree, {origin: "I6"});
