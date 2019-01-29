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



//declaring the directory that will be read and looped through
const directory = "temp 1-2/";
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
console.log(masterArray);

//loops through masterArray to see how many files are in each index. If 3 assign 3,4,5 and directory name , if 2 assign 3,5 and directory name.
for (i = 0; i < masterArray.length; i++) {
    if (masterArray[i].length === 3) {
        // 3_4_5();
        file1 = `${directory}${masterArray[i][0]} 3.pdf`;
        file2 = `${directory}${masterArray[i][1]} 4.pdf`;
        file3 = `${directory}${masterArray[i][2]} 5.pdf`;
        merge([file1, file2, file3], (`${masterArray[i][0]}.pdf`), (err) => {
            if (err)
                return console.log(err);
            console.log('Successfully merged!');
        });
    }
    else if (masterArray[i].length === 2) {
        // 3_5();
        file1 = `${directory}${masterArray[i][0]} 3.pdf`;
        file2 = `${directory}${masterArray[i][1]} 5.pdf`;
        merge([file1, file2], (`${masterArray[i][0]}.pdf`), (err) => {
            if (err)
                return console.log(err);
            console.log('Successfully merged!');
        });
    }

};

// const 3_4_5 = () =>{
//     file1 = `${directory}${masterArray[i][0]} 3.pdf`;
//     file2 = `${directory}${masterArray[i][1]} 4.pdf`;
//     file3 = `${directory}${masterArray[i][2]} 5.pdf`;
//     merge([file1, file2, file3], (`${masterArray[i][0]}.pdf`), (err) => {
//         if (err)
//             return console.log(err);
//         console.log('Successfully merged!');
//     });
// }

// const 3_5 = () => {
//     file1 = `${directory}${masterArray[i][0]} 3.pdf`;
//     file2 = `${directory}${masterArray[i][1]} 5.pdf`;
//     merge([file1, file2], (`${masterArray[i][0]}.pdf`), (err) => {
//         if (err)
//             return console.log(err);
//         console.log('Successfully merged!');
//     });
// }




