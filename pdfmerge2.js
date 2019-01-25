//packages required
const merge = require('easy-pdf-merge');
const path = require('path');
const fs = require("fs");
const fse = require('fs-extra');
const loDash = require("lodash");

//declaring files that will be merged
let file1 = [];
let file2 = "";
let filename = "";

//declaring the directory that will be read and looped through
const directory = "temp v1/";
//reads the filenames in the folder
let files = fs.readdirSync(directory);
// console.log(files)
for (i = 0; i < files.length; i++) {
    file1.push(files[i]);
    console.log("files[i]",files[i])
    // console.log("file1", file1)
    for (j = 0; j < file1.length; j++) {
        console.log("j loop",file1[j])
        // console.log("file1 in j loop",file1)
        // console.log("files[i]".files[i]);
        // if ((file1[j].substring(0, 6)) === (files[i].substring(0, 6))) {
            // console.log("this is working")
            // console.log("file1[j]",file1[j],"files[i]",files[i])
            // let filename = (files[i].substring(0,6))
            // console.log("filename",filename);
            // merge([(`temp v1/${file1[j]}`), (`temp v1/${files[i]}`)], (`${filename}.pdf`), (err) => {
            //     if (err)
            //         return console.log(err);
            //     console.log('Successfully merged!');
            // });
        // }
    };

};
