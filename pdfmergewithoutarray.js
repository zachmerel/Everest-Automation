var merge = require('easy-pdf-merge');
let file1 = 'temp v1/142851 3.pdf';
let file2 = 'temp v1/142851 5.pdf';

merge([file1, file2],'File testOutput.pdf',function(err){

console.log(file1);
    if(err)
    return console.log(err);

    console.log('Successfully merged!');

});