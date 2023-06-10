import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { WebScraperService } from 'src/app/controler/service/web-scraper.service';
import { WebSiteService } from 'src/app/controler/service/web-site.service';

@Component({
  selector: 'app-links-cards',
  templateUrl: './links-cards.component.html',
  styleUrls: ['./links-cards.component.css'],
})
export class LinksCardsComponent implements OnInit {
  allWebsiteUrl: Array<string>;
  storageWebsite = JSON.parse(localStorage.getItem('loadedWebsite'));

  constructor(
    private webSiteService: WebSiteService,
    private webScraperService: WebScraperService,
    private route: Router
  ) {}

  async ngOnInit() {
    this.allWebsiteUrl = await this.getAllUrl();
    console.log("first")
    console.log(this.allWebsiteUrl)
  }

  async getAllUrl(): Promise<Array<string>> {
    const urls: Array<string> = await lastValueFrom(
      this.webScraperService.scrapeLinksWebsite(this.storageWebsite.id)
    );
    return urls;
  }
}
