import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ChartOptions,
  ChartType,
  ChartData,
  ChartDataset,
  ChartConfiguration,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { Data } from 'src/app/models/Data';
import { DatasService } from 'src/app/services/datas/datas.service';

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

  @ViewChild(BaseChartDirective) baseChart?: BaseChartDirective;

  dataSub!: Subscription;
  chartDataConfiguration!: ChartConfiguration;
  datasShop!: Data[];

  constructor(
    private datasService: DatasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataSub = this.datasService.datasShop.subscribe((newData: Data[]) => {
      const options: ChartOptions = {
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

      //LABELS
      const labels = [];
      for (let i = 0; i < 12; i++) {
        labels.push(newData[i].dataDate);
      }

      const datasets: ChartDataset = {
        label: 'Nombre de visites',
        data: [],
        backgroundColor: '#ffb976',
        borderColor: '#ffb976',
        pointBackgroundColor: '#eefbfb',
        pointBorderColor: '#ffb976',
        pointHoverBackgroundColor: '#ffb976',
        pointHoverBorderColor: '#ffb976',
        fill: 'origin',
      };

      //Ajout des datas selon le type
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].type === 'visite') {
          datasets.data.push(newData[i].dataValue);
        }
      }

      const chartData = {
        datasets: [datasets],
        labels: labels,
      };

      this.chartDataConfiguration = {
        data: chartData,
        type: 'bar',
        options,
      };
      this.baseChart?.update();
    });

    this.type = 'bar';
  }
}
