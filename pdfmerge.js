//packages required
const merge = require('easy-pdf-merge');
const path = require('path');
const fs = require("fs");
const fse = require('fs-extra');
const loDash = require("lodash");

//declaring files that will be merged
let file1 = "";
let file2 = "";
let filename = "";

//declaring the directory that will be read and looped through
const directory = "temp v1/";
//reads the filenames in the folder
let files = fs.readdirSync(directory);

for (i = 0; i < files.length; i++) {
    filename = (files[i+1].substring(0, 6))
    // console.log("filename",filename);
    file1 = (`${directory}${files[i]}`);
    console.log("file1", file1);
    file2 = (`${directory}${files[i + 1]}`);
    console.log("file2", file2);
    // break;
    // if first 6 characters match in files 1 and 2 ...
    if ((file1.substring(0, 6)) === (file2.substring(0, 6))) {
        //merges two files and renames them
        console.log("filename after if ",filename);
        merge([file2, file1], (`${filename}.pdf`), (err) => {
            if (err)
                return console.log(err);
            console.log('Successfully merged!');
            // console.log("filename after merge ",filename);
            //append content at the end of the file:
            // fs.appendFile((`${filename}.pdf`),'testDestination',  function (err) {
  
            //     if (err) throw err;
            //     console.log('Updated!');
            // });
        });
    }
};