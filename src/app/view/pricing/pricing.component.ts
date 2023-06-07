import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  checked: boolean;
  yearInfo = { sup: 'yr', basic: '1600', pro: '2600', growing: '600' };
  monthInfo = { sup: 'mo', basic: '240', pro: '360', growing: '58' };
  data = { sup: 'mo', basic: '240', pro: '360', growing: '58' };

  constructor() {
    let js: HTMLScriptElement = document.createElement('script');
    js.src = 'assets/js/js.js';
    document.body.appendChild(js);
  }

  ngOnInit(): void {
    console.log(history.state.exemple);
  }

  toggle() {
    if (this.checked) {
      this.data = this.yearInfo;
    } else {
      this.data = this.monthInfo;
    }
  }
}
