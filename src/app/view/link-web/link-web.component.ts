import { Component, Inject, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Result } from 'src/app/controler/model/result.model';
import { Website } from 'src/app/controler/model/website.model';
import { LoginService } from 'src/app/controler/service/login.service';
import { WebScraperService } from 'src/app/controler/service/web-scraper.service';
import { WebSiteService } from 'src/app/controler/service/web-site.service';

@Component({
  selector: 'app-link-web',
  templateUrl: './link-web.component.html',
  styleUrls: ['./link-web.component.css'],
})
export class LinkWebComponent implements OnInit {
  show = false;
  constructor(
    private webSiteService: WebSiteService,
    private webScraperService: WebScraperService,
    private loginService: LoginService,
    private route: Router
  ) {}
  ngOnInit(): void {}

  showToggle() {
    this.show = !this.show;
  }

  // Get Website by url
  public async fetchWebSiteByUrl(
    url: string,
    protocol: string
  ): Promise<Website> {
    const website = await lastValueFrom(
      this.webSiteService.fetchWebSiteByUrl(url, protocol)
    );
    return website;
  }

  // Main Function
  async getWebsite() {
    // Final Url
    const url = new URL(this.savedWebsite.url);

    // Fetch WebSite By Url
    this.loadedWebsite = await this.fetchWebSiteByUrl(
      url.hostname,
      url.protocol
    );

    localStorage.setItem('loadedWebsite', JSON.stringify(this.loadedWebsite));
    this.route.navigate(['load']);
    return;
  }

  // Logout user
  public logout() {
    this.loginService.logout();
    this.route.navigate(['/login']);
  }

  // Getters && Setters
  // WebSiteServiceng serve

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
}
