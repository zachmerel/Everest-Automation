const fs = require("fs");

//declares the folder where the files are being read
 let directory = process.argv[2]|| "C:/Users/zachm/OneDrive/Documents/Test";
//reads the filenames in the folder
 let files = fs.readdirSync(directory);
// console.log(files);
//for loop cycles through the filenames read
for(i=0; i< files.length; i++){
    //removes the extension from file name but leaves page indicator (3 or 5)
    // let extfree = files[i].substring(0, files[i].lastIndexOf("."));
    //removes the extension from file name and page indicator (3 or 5)
    let extfree = files[i].substring(0, 6);
    //creates array to put edited filenames in
    let noExtensions = []
    //pushes edited file names to array
    noExtensions.push(extfree);

    
    

   

    console.log(noExtensions);
    
};
