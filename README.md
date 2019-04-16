# Everest-Automation

+ npm run reader will get a list of file names (just the load numbers, first 6 digits of the file name) from the 30D MEGA folder
+ npm run qpreader will get a list of file names (just the load numbers, first 6 digits of the file name) from the QP MEGA folder
+ npm run ohreader will get a list of file names (just the load numbers, first 6 digits of the file name) from the On Hold MEGA folder
+ npm run merge will match the load number for the carrier invoice, the rate sheet (if one is included), and the BOL with the invoice from the email attachments folder on the K drive, and merge them into one PDF
+ npm run parse will read the png files of the directory specified in the file and pull the reference number into an object with key value pair of load number: reference number
+ npm run convert takes the pdf of the loads invoice and turns it to a png so it can be parsed.
+npm run jimp moves the png files to a holder folder where tesseract file can parse them.
+npm run browser opens the budap carrier communication portal and enters the reference number (hard coded right now)

##Order of Commands (not ready to run consecutive yet)
1. npm run reader (gets list of files to check to see if invoices have already been factored on the batches excel files)
2. npm run merge (merges all parts of factor package to one pdf)
3. npm run convert (converts pdf to pngs)
4. npm run jimp (moves pngs to holder folder)
5. npm run parse (reads and converts png to text file and gets reference number)
6. npm run browser (enters the reference number to check if bud has it in their system)
