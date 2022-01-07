import { Component, ViewChild, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ChartConfiguration,
  ChartOptions,
  ChartType,
  ChartDataset,
} from 'chart.js';
import { Data } from 'src/app/models/Data';
import { DatasService } from 'src/app/services/datas/datas.service';
import { BaseChartDirective } from 'ng2-charts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-graphic-card',
  templateUrl: './graphic-card.component.html',
  styleUrls: ['./graphic-card.component.css'],
})
export class GraphicCardComponent implements OnInit {
  @ViewChild(BaseChartDirective) baseChart?: BaseChartDirective;

  dataSub!: Subscription;
  chartDataConfiguration!: ChartConfiguration;

  constructor(private datasService: DatasService) {}

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

      //LABELS
      const labels = [];
      for (let i = 0; i < 12; i++) {
        labels.push(newData[i].dataDate);
      }

      const datasets: ChartDataset = {
        label: 'Nombre de commandes',
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
        if (newData[i].type === 'commande') {
          datasets.data.push(newData[i].dataValue);
        }
      }

      const chartData = {
        datasets: [datasets],
        labels: labels,
      };

      this.chartDataConfiguration = {
        data: chartData,
        type: 'line',
        options,
      };
      this.baseChart?.update();
    });
  }

  // $blueDark: #18558f;
  // $blueLight: #eefbfb;
  // $orangeCustom: #ffb976;

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
