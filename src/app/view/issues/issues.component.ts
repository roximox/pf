import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/controler/model/result.model';
import { WebScraperService } from 'src/app/controler/service/web-scraper.service';
import { WebSiteService } from 'src/app/controler/service/web-site.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
})
export class IssuesComponent {
  similar = new Array<Result>();
  products = new Array<Result>();
  results_view = new Array<Result>();
  storageProdacte = JSON.parse(localStorage.getItem('products'));

  constructor(
    private webSiteService: WebSiteService,
    private webScraperService: WebScraperService,
    private route: Router
  ) {}

  async ngOnInit() {
    this.results_view =
      this.results.length === 0 ? this.storageProdacte : this.results;
    console.log(this.results_view);
    if (this.results_view.length > 4) {
      this.products = this.results_view.slice(0, this.results_view.length * 0.5);
      console.log(this.products);
      this.similar = this.results_view.slice(
        this.results_view.length / 2,
        this.results_view.length
      );
    } else {
      this.products = this.results_view;
    }
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
