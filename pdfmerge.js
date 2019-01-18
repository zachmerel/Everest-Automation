//packages required
var merge = require('easy-pdf-merge');
const fs = require("fs");
const loDash = require("lodash");

//declaring files that will be merged
let file1 = "";
let file2 = "";
let filename ="";

// let matchingFiles = [];

//declaring the directory that will be read and looped through
const directory = "temp v1/";
//reads the filenames in the folder
let files = fs.readdirSync(directory);

for (i = 0; i < files.length; i++) {
    filename = (files[i].substring(0, 6))
    file1 = (`${directory}${files[i]}`);
    console.log("file1", file1);
    file2 = (`${directory}${files[i + 1]}`);
    console.log("file2", file2);
    break;
}

console.log("file1 after for loop", file1);
console.log("file2 after for loop", file2);
console.log("filename",filename);
//if first 6 characters match in files 1 and 2 ...
if ((file1.substring(0, 6)) === (file2.substring(0, 6))) {
    //merges two files and renames them
    merge([file1, file2], (`${filename}.pdf`), (err) => {

        if (err)
            return console.log(err);

        console.log('Successfully merged!');

    });
};