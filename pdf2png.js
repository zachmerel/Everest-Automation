const path = require("path");
const pdf = require("pdf-poppler");
const fs = require("fs");

let directory = "invoiceMergeTest";

let files = fs.readdirSync(directory);

for (i = 0; i < files.length; i++) {
  let opts = {
    format: "png",
    out_dir: path.dirname(files[i]),
    out_prefix: path.basename(files[i], path.extname(files[i])),
    page: null
  };

  pdf
    .convert(files[i], opts)
    .then(res => {
      console.log("Successfully converted");
    })
    .catch(error => {
      console.error(error);
    });
}
