import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Result } from 'src/app/controler/model/result.model';
import { Website } from 'src/app/controler/model/website.model';
import { WebScraperService } from 'src/app/controler/service/web-scraper.service';
import { WebSiteService } from 'src/app/controler/service/web-site.service';

@Component({
  selector: 'app-link-web',
  templateUrl: './link-web.component.html',
  styleUrls: ['./link-web.component.css'],
})
export class LinkWebComponent implements OnInit {
  constructor(
    private webSiteService: WebSiteService,
    private webScraperService: WebScraperService
  ) {}
  ngOnInit(): void {}

  // Get Website by url
  public async fetchWebSiteByUrl(
    url: string,
    protocol: string
  ): Promise<Website> {
    const website = await lastValueFrom(
      this.webSiteService.fetchWebSiteByUrl('www.thisoldhouse.com', 'https')
    );
    return website;
  }

  // Get Amazon Products
  public async fetchAmazonProducts(id: number): Promise<Array<Result>> {
    const products = await lastValueFrom(
      this.webScraperService.AmazonProducts(id)
    );
    return products;
  }

  async ScrapingData() {
    // Final Url
    const url = new URL(this.savedWebsite.url);

    // Fetch WebSite By Url
    this.loadedWebsite = await this.fetchWebSiteByUrl(
      url.href.slice(0, -1),
      url.protocol
    );

    console.log('Website loaded success');

    // Fetch Amazon Products
    this.results = await this.fetchAmazonProducts(this.loadedWebsite.id);
    alert('Done');
    console.log(this.results);
  }

  // Getters && Setters
  // WebSiteService
  public get loadedWebsite(): Website {
    return this.webSiteService.loadedWebsite;
  }
  public set loadedWebsite(value: Website) {
    this.webSiteService.loadedWebsite = value;
  }

  public get savedWebsite(): Website {
    return this.webSiteService.savedWebsite;
  }
  public set savedWebsite(value: Website) {
    this.webSiteService.savedWebsite = value;
  }

  // WebScraperService
  get results(): Array<Result> {
    return this.webScraperService.results;
  }

  set results(value: Array<Result>) {
    this.webScraperService.results = value;
  }
}
