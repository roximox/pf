import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.scss']
})
export class SidbarComponent implements OnInit {
  showSidebar = false;
  baseUrl!: string | null;

  constructor() {}

  ngOnInit() {
  }

  showSideBar() {
    this.showSidebar = true;
  }

  hideSideBar() {
    this.showSidebar = false;
  }
}
