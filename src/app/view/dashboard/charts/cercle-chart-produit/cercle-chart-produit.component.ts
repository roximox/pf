import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cercle-chart-produit',
  templateUrl: './cercle-chart-produit.component.html',
  styleUrls: ['./cercle-chart-produit.component.css']
})
export class CercleChartProduitComponent  implements OnInit{
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['avaibale', 'unavaibale', 'error 404'],
      datasets: [
        {
          data: [300, 100, 200],
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
