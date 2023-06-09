import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
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
  storageProdacte = JSON.parse(localStorage.getItem('products'));
  allWebsiteUrl: Array<string>;

  constructor(
    private webSiteService: WebSiteService,
    private webScraperService: WebScraperService,
    private route: Router
  ) {}

  async ngOnInit() {
    console.log(this.results);
    this.results_view =
      this.results.length === 0 ? this.storageProdacte : this.results;
    console.log(this.storageProdacte);

    this.allWebsiteUrl = await this.getAllUrl();

    console.log('first');
    console.log(this.allWebsiteUrl);
  }

  async getAllUrl(): Promise<Array<string>> {
    const urls: Array<string> = await lastValueFrom(
      this.webScraperService.scrapeLinksWebsite(1)
    );
    return urls;
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
