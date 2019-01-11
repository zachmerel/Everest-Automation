let XLSX = require("xlsx");

let file_saver = require("file-saver")

// let testArray = [[141001],[141002],[141003],[141004],[141005]];

// XLSX.utils.sheet_add_aoa(ws, [[1,2], [2,3], [3,4]], {origin: "A2"});
var wb = XLSX.utils.book_new();
wb.Props = {
    Title: "SheetJS Tutorial",
    Subject: "Test",
    Author: "Red Stapler",
    CreatedDate: new Date(2018,12,14)
};
wb.SheetNames.push("Test Sheet");


/* make worksheet */
var ws_data = [[141001],[141002],[141003],[141004],[141005]];
var ws = XLSX.utils.aoa_to_sheet(ws_data);

wb.Sheets["Test Sheet"] = ws;

var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});

function s2ab(s) { 
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;    
}

$("#button-a").click(function(){
    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
});