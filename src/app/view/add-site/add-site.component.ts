import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Website } from 'src/app/controler/model/website.model';
import { WebSiteService } from 'src/app/controler/service/web-site.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css'],
})
export class AddSiteComponent implements OnInit {
  newWebsite = new Website();
  constructor(private websiteService: WebSiteService, private router: Router) {}
  ngOnInit(): void {}

  saveHandler() {
    this.websiteService.save(this.newWebsite).subscribe((date) => {
      this.router.navigate(['/dashboard/sites']);
    });
  }
}
