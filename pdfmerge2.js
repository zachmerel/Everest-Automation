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
    // merge([`${directory}${masterArray[i][0]}.pdf,${directory}${masterArray[i][1]}.pdf,${directory}${masterArray[i][2]}.pdf`] (`${masterArray[i][0]}.pdf`), (err) => {
        merge(masterArray[i], (`${masterArray[i][0]}.pdf`), (err) => {

    if (err)
            return console.log(err);
        console.log('Successfully merged!');
    });
}