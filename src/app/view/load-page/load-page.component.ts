import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Result } from 'src/app/controler/model/result.model';
import { WebScraperService } from 'src/app/controler/service/web-scraper.service';
import { WebSiteService } from 'src/app/controler/service/web-site.service';

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.scss'],
})
export class LoadPageComponent implements OnInit {
  constructor(
    private webSiteService: WebSiteService,
    private webScraperService: WebScraperService,
    private route: Router
  ) {}

  async ngOnInit() {
    await this.getData();
  }

  async getData() {
    // Fetch Amazon Products
    this.results = await this.fetchAmazonProducts(
      this.webSiteService.loadedWebsite.id
    );

    console.log('Results is loaded success');
    this.route.navigate(['dashboard/summary']);
  }

  // Get Amazon Products
  public async fetchAmazonProducts(id: number): Promise<Array<Result>> {
    const products = await lastValueFrom(
      this.webScraperService.AmazonProducts(id)
    );
    return products;
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
