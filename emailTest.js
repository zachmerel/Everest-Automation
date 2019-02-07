//packages required
const merge = require('easy-pdf-merge');
const path = require('path');
const fs = require("fs");
const fse = require('fs-extra');
const _ = require("lodash");



//declaring the directory that will be read and looped through
const directory = "invoiceTest/";
//reads the filenames in the folder
let files = fs.readdirSync(directory);
//creates array to put edited filenames in
let first6Array = []
//for loop cycles through the filenames and removes everything except first 6 didgits
for (i = 0; i < files.length; i++) {
    let first6 = files[i].substring(0, 6);
    first6Array.push(first6);
};
console.log(first6Array);
//declares masterArray
const masterArray = [];




//finds duplicates in first6Array then puts those duplicates in their own array and pushes to MasterArray.
const unique = new Set(first6Array);
unique.forEach(u => {
    masterArray.push(first6Array.filter(e => e === u));
});
console.log("masterArray",masterArray);
const attachments = "K:/Email Attachments"

let pdfAttachments = fs.readdirSync(attachments);
// console.log("pdfAttachemnts",pdfAttachments)

// const pdfAttachmentsWithoutExtentensions = [];

// loops through everest invoice folder and removes everything but load number
for (i = 0; i < pdfAttachments.length; i++) {
    newFileName = pdfAttachments[i].substring(8, 14);
    // console.log("pdfAttachments[i]", pdfAttachments[i])
    console.log("newFileName", newFileName)
    };
//     pdfAttachmentsWithoutExtentensions.push(newFileName);
//     // console.log("just file name", newFileName)
// // };
// // console.log(pdfAttachmentsWithoutExtentensions)
// // console.log("pdfAttachments",pdfAttachments)


// for (i = 0; i < masterArray.length; i++) {
//     // console.log("first index of each array in masterArray", masterArray[i][0]);
//     let test = _.intersectionWith(masterArray[i], pdfAttachments, _.isEqual);
//     for (j = 0; j < test.length; j++) {
//         if (test[j] === masterArray[i][0]) {
//             console.log("test[j]",test[j]);
//             console.log("masterArray[i]",masterArray[i])
//             // masterArray[i].push(test[j])
//             // console.log("time to push")
//         }
//     }


//     // console.log(test);
// };

// console.log("masterArray with invoices", masterArray);