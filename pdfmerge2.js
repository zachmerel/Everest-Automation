//NOTES
//create an array of array. search the directory any files that have the same first 6 didgits push them to an array. 
//need to .chunk the array for every set of duplicates
//loop through the array of arrays and merge each array into its own pdf using easy pdf merge.

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
//creates array to put edited filenames in
let first6Array = []
//for loop cycles through the filenames and removes everything except first 6 didgits
for (i = 0; i < files.length; i++) {
    let first6 = files[i].substring(0, 6);
    first6Array.push(first6);
};
console.log(first6Array);

const masterArray = [];

const unique = new Set(first6Array); // Set {"141848", "142851", "143275"}
unique.forEach(u => {
    masterArray.push(first6Array.filter(e => e === u));
});
console.log(masterArray);

for (i = 0; i < masterArray.length; i++) {
    if (masterArray[i].length === 3) {
        file1 = `temp v1/${masterArray[i][0]} 3.pdf`;
        file2 = `temp v1/${masterArray[i][1]} 4.pdf`;
        file3 = `temp v1/${masterArray[i][2]} 5.pdf`;
        merge([file1, file2, file3], (`${masterArray[i][0]}.pdf`), (err) => {
            if (err)
                return console.log(err);
            console.log('Successfully merged!');
        });
        // console.log("file1",file1);
        // console.log("file2",file2);
        // console.log("file3",file3);
        // console.log("masterArray[i][0] after template literal", masterArray[i][0])
        // console.log("masterArray[i][1]", masterArray[i][1])
        // console.log("masterArray[i][2]", masterArray[i][2])
        // console.log("the length of this array is 3");
    }
    else if (masterArray[i].length === 2) {
        console.log("the length of this array is 2");
    }
    else {
        console.log("back to the drawing board");
    }
};


