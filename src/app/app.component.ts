import { Component } from '@angular/core';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translator';
  status = "active"; 

  // public downloadAsPDF() {
  //   const doc = new jsPDF();
   
   
  //   var html = htmlToPdfmake("<div>Sample (സാമ്പിൾ)</div>");
     
  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).open(); 
     
  // }

}
