const merge = require('easy-pdf-merge');
const path = require('path');
const fs = require("fs");
const fse = require('fs-extra');
const loDash = require("lodash");


//declaring the directory that stores everest invoices
const everestInvoices = "K:/Email Attachments/";
//declaring the directory that will be read and looped through (carrier invoices and BOLS)
const directory = "K:/MEGA/Daily Request - 30D/";
//reads the filenames in the folder
let files = fs.readdirSync(directory);
//creates array to put edited filenames in
let first6Array = []
//for loop cycles through the filenames and removes everything except first 6 didgits
for (i = 0; i < files.length; i++) {
    let first6 = parseInt(files[i].substring(0, 6));
    first6Array.push(first6);
};
// console.log(first6Array);

let duplicateFree = loDash.sortedUniq(first6Array);
console.log(duplicateFree);