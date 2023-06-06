import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.scss'],
})
export class SidbarComponent implements OnInit {
  baseUrl!: string | null;
  openAffiliateAudit = false;

  constructor() {}

  ngOnInit() {}

  toggleAffiliateAudit() {
    this.openAffiliateAudit = !this.openAffiliateAudit;
  }
}
