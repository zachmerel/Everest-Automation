//dependencies
const path = require("path");
const pdf = require("pdf-poppler");
const fs = require("fs");

//directory of pdfs
let directory = "invoiceMergeTest";

//reads directory
let files = fs.readdirSync(directory);

//loops through directory and reassigns files names and paths
for (i = 0; i < files.length; i++) {
    console.log(files[i])
  let opts = {
    format: "png",
    out_dir: path.dirname(`./${directory}/${files[i]}`),
    out_prefix: path.basename(`./${directory}/${files[i]}`, path.extname(`./${directory}/${files[i]}`)),
    page: null
  };
// converts pdfs to pngs
  pdf
    .convert(`./${directory}/${files[i]}`, opts)
    .then(res => {
      console.log("Successfully converted");
    })
    .catch(error => {
      console.error(error);
    });
}


