import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  // ChartConfiguration,
  // ChartEvent,
  ChartOptions,
  ChartType,
  ChartDataset,
} from 'chart.js';
import { Data } from 'src/app/models/Data';
import { DatasService } from 'src/app/services/datas/datas.service';
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

  datasShop!: Data[];

  constructor(
    private datasService: DatasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.type = 'line';

    this.datasShop = this.datasService.datasShop;

    this.labels = [];

    //Affichage du label selon la date de la data
    for (let i = 0; i < 12; i++) {
      this.labels.push(this.datasShop[i].dataDate);
    }

    this.datasets = [
      {
        label: 'Nombre de commandes',
        data: [],
        backgroundColor: '#ffb976',
        borderColor: '#ffb976',
        pointBackgroundColor: '#eefbfb',
        pointBorderColor: '#ffb976',
        pointHoverBackgroundColor: '#ffb976',
        pointHoverBorderColor: '#ffb976',
        fill: 'origin',
      },
    ];

    //Ajout des datas selon le type
    for (let i = 0; i < this.datasShop.length; i++) {
      if (this.datasShop[i].type === 'commande') {
        this.datasets[0].data.push(this.datasShop[i].dataValue);
      }
    }

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
