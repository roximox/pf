import { Injectable } from '@angular/core';

import { environment as env } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Website } from '../model/website.model';

@Injectable({
  providedIn: 'root',
})
export class WebSiteService {
  // BaseUrl = "http://localhost:8036/api"
  readonly API = `${env.BaseUrl}/admin/webSite`;
  private _loadedWebsite: Website;
  private _loadedWebsites: Array<Website>;
  private _savedWebsite: Website;

  constructor(private http: HttpClient) {}

  // Get Website by id
  public fetchWebSiteById(id: number): Observable<Website> {
    return this.http.get<Website>(`${this.API}/id/${id}`);
  }

  // Get Website by url
  public fetchWebSiteByUrl(url: string, protocol: string): Observable<Website> {
    return this.http.get<Website>(`${this.API}/url/${protocol}/${url}`);
  }

  // Save Website
  public save(website: Website): Observable<number> {
    return this.http.post<number>(`${this.API}/`, website);
  }

  // Get All Website
  public getAll(): Observable<Array<Website>> {
    return this.http.get<Array<Website>>(`${this.API}/get-all`);
  }

  // Getters && Setters
  public get loadedWebsite(): Website {
    if (this._loadedWebsite == null) this._loadedWebsite = new Website();
    return this._loadedWebsite;
  }
  public set loadedWebsite(value: Website) {
    this._loadedWebsite = value;
  }

  public get loadedWebsites(): Array<Website> {
    if (this._loadedWebsites == null)
      this._loadedWebsites = new Array<Website>();
    return this._loadedWebsites;
  }
  public set loadedWebsites(value: Array<Website>) {
    this._loadedWebsites = value;
  }

  public get savedWebsite(): Website {
    if (this._savedWebsite == null) this._savedWebsite = new Website();
    return this._savedWebsite;
  }
  public set savedWebsite(value: Website) {
    this._savedWebsite = value;
  }
}
