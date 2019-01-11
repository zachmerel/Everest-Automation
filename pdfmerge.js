var merge = require('easy-pdf-merge');

merge(['temp v1/142851 3','temp v1/142851 5'],'File testOutput.pdf',function(err){

    if(err)
    return console.log(err);

    console.log('Successfully merged!');

});