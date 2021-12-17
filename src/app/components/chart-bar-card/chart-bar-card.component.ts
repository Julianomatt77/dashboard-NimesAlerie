import { Component, OnInit } from '@angular/core';
import {
  // ChartConfiguration,
  // ChartEvent,
  ChartOptions,
  ChartType,
  ChartDataset,
} from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';

// import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart-bar-card',
  templateUrl: './chart-bar-card.component.html',
  styleUrls: ['./chart-bar-card.component.css'],
})
export class ChartBarCardComponent implements OnInit {
  type!: ChartType;
  labels!: string[];
  datasets!: ChartDataset[];
  options!: ChartOptions;

  constructor() {}

  ngOnInit(): void {
    this.type = 'bar';

    this.labels = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Aout',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];

    this.datasets = [
      {
        label: 'Nombre de visites',
        data: [120, 80, 45, 25, 70, 30, 90, 65, 47, 42, 66, 143],
        backgroundColor: '#ffb976',
        borderColor: '#ffb976',
        pointBackgroundColor: '#eefbfb',
        pointBorderColor: '#ffb976',
        pointHoverBackgroundColor: '#ffb976',
        pointHoverBorderColor: '#ffb976',
        fill: 'origin',
      },
      {
        label: 'Nombre de paniers',
        data: [88, 66, 33, 16, 58, 17, 71, 52, 39, 37, 62, 124],
        backgroundColor: '#eefbfb',
        borderColor: '#ffb976',
        pointBackgroundColor: '#eefbfb',
        pointBorderColor: '#ffb976',
        pointHoverBackgroundColor: '#ffb976',
        pointHoverBorderColor: '#ffb976',
        fill: 'origin',
      },
    ];

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          display: true,
          labels: {
            color: '#eefbfb',
          },
        },
        title: {
          display: false,
          text: 'Valeur du panier moyen',
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#eefbfb',
          },
        },
        y: {
          position: 'left',
          grid: {
            color: '#eefbfb',
          },
          ticks: {
            color: '#eefbfb',
          },
        },
      },
      elements: {
        line: {
          tension: 0.5,
        },
      },
    };
  }

  // @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // public barChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: {
  //     x: {},
  //     y: {
  //       min: 10,
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       display: true,
  //     },
  //     // datalabels: {
  //     //   anchor: 'end',
  //     //   align: 'end',
  //     // },
  //   },
  // };
  // public barChartType: ChartType = 'bar';
  // // public barChartPlugins = [DataLabelsPlugin];

  // public barChartData: ChartData<'bar'> = {
  //   labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  //   datasets: [
  //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  //   ],
  // };

  // events
  // public chartClicked({
  //   event,
  //   active,
  // }: {
  //   event: MouseEvent;
  //   active: {}[];
  // }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({
  //   event,
  //   active,
  // }: {
  //   event: MouseEvent;
  //   active: {}[];
  // }): void {
  //   console.log(event, active);
  // }

  // public randomize(): void {
  //   // Only Change 3 values
  //   this.barChartData.datasets[0].data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     Math.round(Math.random() * 100),
  //     56,
  //     Math.round(Math.random() * 100),
  //     40,
  //   ];

  //   this.chart?.update();
  // }
}
