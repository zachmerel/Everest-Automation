var x = '24176801\nCommodity';
console.log(x)
if (x.includes("\n")) {
    console.log("contains line break")
       var test = x.split("\n");
       console.log(test)
    }
// }

//need to push the new split array into new array if does not contain line break then push to the new array.