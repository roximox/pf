import { Component, OnInit } from '@angular/core';
import { Website } from 'src/app/controler/model/website.model';
import { WebSiteService } from 'src/app/controler/service/web-site.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
})
export class SitesComponent implements OnInit {
  constructor(private websiteService: WebSiteService) {}
  ngOnInit(): void {
    this.websiteService.getAll().subscribe(
      (data) => {
        console.log('data');
        console.log(data);
        data.map((site) => {
          const url = new URL(site.url);
          site.url = url.hostname;
          return site;
        });
        this.loadedWebsites = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public get loadedWebsites(): Array<Website> {
    return this.websiteService.loadedWebsites;
  }
  public set loadedWebsites(value: Array<Website>) {
    this.websiteService.loadedWebsites = value;
  }
}
