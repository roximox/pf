import { Component } from '@angular/core';
import { Website } from 'src/app/controler/model/website.model';

@Component({
  selector: 'app-new-web-site',
  templateUrl: './new-web-site.component.html',
  styleUrls: ['./new-web-site.component.css']
})
export class NewWebSiteComponent {
  newWebsite : Website;

}
