import PyPDF2
object = open('C:\Automation\Everest-Automation\Invoice_144924.pdf','rb')

reader = PyPDF2.PdfFileReader(object)
reader.numPages()

reader.numPages
cd 