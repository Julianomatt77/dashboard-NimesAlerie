import { Component, OnInit } from '@angular/core';
import {
  // ChartConfiguration,
  // ChartEvent,
  ChartOptions,
  ChartType,
  ChartDataset,
} from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-card',
  templateUrl: './graphic-card.component.html',
  styleUrls: ['./graphic-card.component.css'],
})
export class GraphicCardComponent implements OnInit {
  type!: ChartType;
  labels!: string[];
  datasets!: ChartDataset[];
  options!: ChartOptions;

  constructor() {}

  ngOnInit(): void {
    this.type = 'line';

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
        label: 'Nombre de commandes',
        data: [80, 60, 25, 5, 40, 10, 60, 50, 30, 35, 50, 110],
        backgroundColor: '#ffb976',
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
          grid: {
            display: false,
            // color: '#eefbfb',
          },
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

  //       $blueDark: #18558f;
  // $blueLight: #eefbfb;
  // $orangeCustom: #ffb976;

  // private static generateNumber(i: number): number {
  //   return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  // }

  // public randomize(): void {
  //   for (let i = 0; i < this.lineChartData.datasets.length; i++) {
  //     for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
  //       this.lineChartData.datasets[i].data[j] =
  //         GraphicCardComponent.generateNumber(i);
  //     }
  //   }
  //   this.chart?.update();
  // }

  // events
  // public chartClicked({
  //   event,
  //   active,
  // }: {
  //   event?: ChartEvent;
  //   active?: {}[];
  // }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({
  //   event,
  //   active,
  // }: {
  //   event?: ChartEvent;
  //   active?: {}[];
  // }): void {
  //   console.log(event, active);
  // }

  // public hideOne(): void {
  //   const isHidden = this.chart?.isDatasetHidden(1);
  //   this.chart?.hideDataset(1, !isHidden);
  // }

  // public pushOne(): void {
  //   this.lineChartData.datasets.forEach((x, i) => {
  //     const num = GraphicCardComponent.generateNumber(i);
  //     x.data.push(num);
  //   });
  //   this.lineChartData?.labels?.push(
  //     `Label ${this.lineChartData.labels.length}`
  //   );

  //   this.chart?.update();
  // }

  // public changeColor(): void {
  //   this.lineChartData.datasets[2].borderColor = 'green';
  //   this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

  //   this.chart?.update();
  // }

  // public changeLabel(): void {
  //   if (this.lineChartData.labels) {
  //     this.lineChartData.labels[2] = ['1st Line', '2nd Line'];
  //   }

  //   this.chart?.update();
  // }
}
