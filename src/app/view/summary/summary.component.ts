import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/controler/model/result.model';
import { WebScraperService } from 'src/app/controler/service/web-scraper.service';
import { WebSiteService } from 'src/app/controler/service/web-site.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  results_view = new Array<Result>();
  p = JSON.parse(localStorage.getItem('products'));

  constructor(
    private webSiteService: WebSiteService,
    private webScraperService: WebScraperService,
    private route: Router
  ) {}

  async ngOnInit() {
    if (this.results.length > 4) {
      this.results_view = this.results.slice(0, 4);
      
    } else {
      this.results_view = this.results;
    }
    console.log(this.results);

    console.log(this.p);
  }

  // Getters & Setters
  // WebScraperService
  get results(): Array<Result> {
    return this.webScraperService.results;
  }

  set results(value: Array<Result>) {
    this.webScraperService.results = value;
  }
}
