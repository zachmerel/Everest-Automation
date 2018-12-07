const fs = require("fs");


 let directory = "C:/Automation/test_invoices";

 let files = fs.readdirSync(directory);
console.log(files);

for(i=0; i< files.length; i++){
    let noExtensions = files[i].substring(0, files[i].lastIndexOf("."));
    console.log(noExtensions);
};
