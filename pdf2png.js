const path = require("path");
const pdf = require("pdf-poppler");
const fs = require("fs");

let directory = "invoiceMergeTest";

let files = fs.readdirSync(directory);

// const findFile = `./${directory}/${files[i]}`
for (i = 0; i < files.length; i++) {
    console.log(files[i])
  let opts = {
    format: "png",
    out_dir: path.dirname(`./${directory}/${files[i]}`),
    out_prefix: path.basename(`./${directory}/${files[i]}`, path.extname(`./${directory}/${files[i]}`)),
    page: null
  };

  pdf
    .convert(`./${directory}/${files[i]}`, opts)
    .then(res => {
      console.log("Successfully converted");
    })
    .catch(error => {
      console.error(error);
    });
}

//  let testFile = "./invoiceMergeTest/143700_3.pdf"
// let opts = {
//     format: "png",
//     out_dir: path.dirname(testFile),
//     out_prefix: path.basename(testFile, path.extname(testFile)),
//     page: null
//   };

//   pdf
//     .convert(testFile, opts)
//     .then(res => {
//       console.log("Successfully converted");
//     })
//     .catch(error => {
//       console.error(error);
//     });
