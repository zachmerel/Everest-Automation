const Jimp = require('jimp');

let testImage = "./invoiceMergeTest/140647 4-1.png"
 
// open a file called "lenna.png"
Jimp.read(testImage, (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(3300, 1900) // resize
    // .quality(100) // set JPEG quality
    .write('140647.jpg'); // save
});