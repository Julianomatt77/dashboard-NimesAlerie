import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart-card',
  templateUrl: './pie-chart-card.component.html',
  styleUrls: ['./pie-chart-card.component.css'],
})
export class PieChartCardComponent implements OnInit {
  type!: ChartType;
  labels!: string[];
  datasets!: ChartDataset[];
  options!: ChartOptions;

  constructor() {}

  ngOnInit(): void {
    this.type = 'doughnut';

    this.labels = ['Commandes converties', 'Commandes annulées'];

    this.datasets = [
      {
        label: 'Conversion commande',
        data: [82, 18],
        backgroundColor: ['Green', 'Red'],
        hoverBackgroundColor: ['#94C694', '#FF7D7D'],
        rotation: 90,
      },
    ];

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#18558f',
          },
        },
        title: {
          display: true,
          text: 'Pourcentage de conversion de commandes',
          color: '#18558f',
        },
      },
    };
  }
}
