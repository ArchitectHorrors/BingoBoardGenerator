function generatePDFFile() {
	const element = document.getElementById("pdfFile");

	html2pdf().from(element).save();
}
