import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { Data } from 'src/app/models/Data';
import { DatasService } from 'src/app/services/datas/datas.service';
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

  dataVisite!: Data[];
  dataPanier!: Data[];
  datasShop!: Data[];

  constructor(
    private datasService: DatasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // //Récup de l'id
    // const id = this.route.snapshot.params['id']; // car :id dans app routing module ts, return a string

    // this.datasService
    //   .getDataById(+id) //+ before a string cast it to a number (ParseInt)
    //   .then((data: Data) => {
    //     this.data = data;
    //   });

    this.type = 'bar';
    // this.dataVisite = this.datasService.datasVisite;
    // this.dataPanier = this.datasService.datasPanier;
    this.datasShop = this.datasService.datasShop;

    this.labels = [];

    //Affichage du label selon la date de la data
    for (let i = 0; i < 12; i++) {
      this.labels.push(this.datasShop[i].dataDate);
    }

    // this.datasets.data = [];

    this.datasets = [
      {
        label: 'Nombre de visites',
        data: [],
        // this.data.push(this.datasShop[i].dataValue),

        // data: [
        //   this.dataVisite[0].dataValue,
        //   this.dataVisite[1].dataValue,
        //   this.dataVisite[2].dataValue,
        //   this.dataVisite[3].dataValue,
        //   this.dataVisite[4].dataValue,
        //   this.dataVisite[5].dataValue,
        //   this.dataVisite[6].dataValue,
        //   this.dataVisite[7].dataValue,
        //   this.dataVisite[8].dataValue,
        //   this.dataVisite[9].dataValue,
        //   this.dataVisite[10].dataValue,
        //   this.dataVisite[11].dataValue,
        // ],
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
        data: [
          // this.dataPanier[0].dataValue,
          // this.dataPanier[1].dataValue,
          // this.dataPanier[2].dataValue,
          // this.dataPanier[3].dataValue,
          // this.dataPanier[4].dataValue,
          // this.dataPanier[5].dataValue,
          // this.dataPanier[6].dataValue,
          // this.dataPanier[7].dataValue,
          // this.dataPanier[8].dataValue,
          // this.dataPanier[9].dataValue,
          // this.dataPanier[10].dataValue,
          // this.dataPanier[11].dataValue,
        ],
        backgroundColor: '#eefbfb',
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
      if (this.datasShop[i].type === 'visite') {
        this.datasets[0].data.push(this.datasShop[i].dataValue);
      }
      if (this.datasShop[i].type === 'panier') {
        this.datasets[1].data.push(this.datasShop[i].dataValue);
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
