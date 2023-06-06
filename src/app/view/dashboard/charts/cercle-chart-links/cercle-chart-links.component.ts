import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cercle-chart-links',
  templateUrl: './cercle-chart-links.component.html',
  styleUrls: ['./cercle-chart-links.component.css']
})
export class CercleChartLinksComponent implements OnInit{
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['avaibale', 'unavaibale', 'error 404'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [documentStyle.getPropertyValue('--purple-700'), documentStyle.getPropertyValue('--purple-300'), documentStyle.getPropertyValue('--purple-100')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--purple-800'), documentStyle.getPropertyValue('--purple-400'), documentStyle.getPropertyValue('--purple-200')]
        }
      ]
    };


    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }
}
