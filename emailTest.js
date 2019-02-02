const fs = require("fs");

const attachments = "//EverestServer/Users$/Zach/Documents/Email Attachments"

let pdfAttachments = fs.readdirSync(attachments);

pdfAttachmentsWithoutExtentensions = [];

for(i = 0; i< pdfAttachments.length;i++){
    newFileName = pdfAttachments[i].substring(8,14);
    pdfAttachmentsWithoutExtentensions.push(newFileName);
    // console.log("just file name", newFileName)
};
console.log(pdfAttachmentsWithoutExtentensions)
// console.log("pdfAttachments",pdfAttachments)