import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../model/result.model';

import { environment as env } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class WebScraperService {
  readonly API = `${env.BaseUrl}/admin/webscraper`;
  private _results: Array<Result>;

  constructor(private http: HttpClient) {}

  // Get Amazon Products
  public AmazonProducts(id: number): Observable<Array<Result>> {
    return this.http.get<Array<Result>>(`${this.API}/id/${id}`);
  }

  // Get scrapeLinksWebsite
  public scrapeLinksWebsite(id: number): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${this.API}/scrapeLinksWebsite/${id}`);
  }

  // Getters && Setters
  get results(): Array<Result> {
    if (this._results == null) {
      this._results = new Array<Result>();
    }
    return this._results;
  }

  set results(value: Array<Result>) {
    this._results = value;
  }
}
