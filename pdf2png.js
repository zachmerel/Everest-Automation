const path = require('path');
const pdf = require('pdf-poppler');
 
let file = "./temp v1/143559 3_Page_2.png";
 
let opts = {
    format: 'png',
    out_dir: path.dirname(file),
    out_prefix: path.baseName(file, path.extname(file)),
    page: null
}
 
pdf.convert(file, opts)
    .then(res => {
        console.log('Successfully converted');
    })
    .catch(error => {
        console.error(error);
    })