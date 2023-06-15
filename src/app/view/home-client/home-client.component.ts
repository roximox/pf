import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as Papa from 'papaparse';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss']
})
export class HomeClientComponent {
  title = 'htmltopdf';
  @ViewChild('pdfTable', {static: false})
  pdfTable!: ElementRef;

  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;

    html2canvas(pdfTable).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width*1.1;
      pdf.addImage(imgData, 'PNG', 3, 25, pdfWidth, pdfHeight);
      pdf.save('Slinker-facture.pdf');
    });
  }
  public telechargerCSV(): void {
    const htmlContent = document.documentElement.outerHTML;
    const csvData = Papa.unparse(htmlContent, { delimiter: ';' });

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'page.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ...



  /*@ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;

  constructor(private renderer: Renderer2) { }

  public telechargerCSV(): void {
    const element = this.pdfTable.nativeElement;
    const csvData = this.convertToCSV(element.innerHTML);

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'slinker-facture.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private convertToCSV(html: string): string {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;

    const rows = Array.from(tempElement.querySelectorAll('tr'));

    const csvRows = rows.map(row => {
      const cells = Array.from(row.querySelectorAll('td, th'));
      return cells.map(cell => cell.textContent).join(',');
    });

    return csvRows.join('\n');
  }*/
}
