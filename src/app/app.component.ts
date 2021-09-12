import { Component, ComponentFactoryResolver } from '@angular/core';

// import jsPDF from 'jspdf';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import htmlToPdfmake from 'html-to-pdfmake';
// import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translator';
  status = "active";
  detailElements = [{fName:"", lName:""}];
  evenElements = [];
  oddElements=[];
  loadedFeature = "recipe";

  setVal= false;
  evenNumbers=[2,4,6];
  value="100";

  addItem(details:{fName:string, lName:string}){
      this.detailElements.push({fName:details.fName, lName:details.lName});
  }

  addEven(number : any){
    if(number % 2 == 0){
      this.evenElements.push(number);
    }else{
      this.oddElements.push(number);
    }
  }

  onSelectedTab(feature: string){
    this.loadedFeature = feature;
  }

  // public downloadAsPDF() {
  //   const doc = new jsPDF();
   
   
  //   var html = htmlToPdfmake("<div>Sample (സാമ്പിൾ)</div>");
     
  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).open(); 
     
  // }

}
