const Jimp = require('jimp');
const fs = require("fs");
const fileExtension = require('file-extension');

//directory of invoices 
let directory = "invoiceMergeTest";

// //array of pngs to be parsed
let myImage = []
//reads through directory 
let files = fs.readdirSync(directory);

for (i = 0; i < files.length; i++) {
    let extType = fileExtension(files[i])
    // console.log("extTYpe:",extType);
    // console.log(files[i])
    if (extType === "png") {
        myImage.push(files[i])
    }
};

for (i = 0; i < myImage.length; i++) {
    Jimp.read(`./${directory}/${myImage[i]}`, (err, lenna) => {
        console.log(myImage[i])
        if (err) throw err;
        lenna
            .resize(3300, 1900) // resize
            // .quality(100) // set JPEG quality
            .write(`${myImage[i]}.png`); // save
    });
}