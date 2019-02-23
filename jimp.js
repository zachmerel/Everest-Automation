const Jimp = require('jimp');
const fs = require("fs");
const fileExtension = require('file-extension');

//directory of invoices 
let directory = "everestInvoices";

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
console.log(myImage)
for (i = 0; i < myImage.length; i++) {
<<<<<<< HEAD
    console.log(myImage[i])

    let test = myImage[i];

    Jimp.read(`./${directory}/${myImage[i]}`, (err, res) => {
        if (err) throw err;
        res
            .resize(3300, 1900) // resize
            // .quality(100) // set JPEG quality
            .write(`./${directory}/${test}.png`); // save
=======
    let localvar = myImage[i];
    Jimp.read(`./${directory}/${myImage[i]}`, (err, res) => {
        if (err) throw err;
        res
            .resize(4500, 2700) // resize
            // .quality(100) // set JPEG quality
            .write(`./${directory}/holderFolder/${localvar}.png`); // save
>>>>>>> e3c324f2c674fa4aa490532a46e98ea0a2242216
    });
}