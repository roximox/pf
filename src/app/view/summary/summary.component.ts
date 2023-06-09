import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/controler/model/result.model';
import { WebScraperService } from 'src/app/controler/service/web-scraper.service';
import { WebSiteService } from 'src/app/controler/service/web-site.service';
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  results_view = new Array<Result>();
  storageProdacte = JSON.parse(localStorage.getItem('products'));



  constructor(
    private webSiteService: WebSiteService,
    private webScraperService: WebScraperService,
    private route: Router
  ) {}

  async ngOnInit() {
    console.log(this.results);
    this.results_view = this.results.length === 0 ? this.storageProdacte  : this.results
    console.log(this.storageProdacte);
  }

  // Getters & Setters
  // WebScraperService
  get results(): Array<Result> {
    return this.webScraperService.results;
  }

  set results(value: Array<Result>) {
    this.webScraperService.results = value;
  }
  title = 'htmltopdf';
  @ViewChild('pdfTable', {static: false})
  pdfTable!: ElementRef;

  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;

    html2canvas(pdfTable).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth()*1.3;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width*1.1;
      pdf.addImage(imgData, 'PNG', -30, 0, pdfWidth, pdfHeight);
      pdf.save('facture.pdf');
    });
  }
}
