import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartDataset,
  ChartOptions,
  ChartType,
  ChartConfiguration,
  ChartData,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { Data } from 'src/app/models/Data';
import { DatasService } from 'src/app/services/datas/datas.service';

@Component({
  selector: 'app-pie-chart-card',
  templateUrl: './pie-chart-card.component.html',
  styleUrls: ['./pie-chart-card.component.css'],
})
export class PieChartCardComponent implements OnInit {
  // type!: ChartType;
  // labels!: string[];
  // datasets!: ChartDataset[];
  // options!: ChartOptions;

  commandesTotal!: number;
  discardedCart!: number;
  totalCart!: number;

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

      //LABELS
      const labels = [' % paniers convertis', '% paniers abandonnés'];

      const datasets: ChartDataset = {
        label: '',
        data: [],
        backgroundColor: ['#18558f', '#ffb976'],
        borderColor: ['#18558f', '#ffb976'],
        hoverBackgroundColor: ['#94C694', '#FF7D7D'],
        rotation: 0,
      };

      //Ajout des datas selon le type
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].type === 'commandeNbr') {
          this.commandesTotal = newData[i].dataValue;
        }
        if (newData[i].type === 'discardedCart') {
          this.discardedCart = newData[i].dataValue;
        }
        this.totalCart = this.commandesTotal + this.discardedCart;
      }
      datasets.data.push(
        Math.round((this.commandesTotal / this.totalCart) * 100)
      );
      datasets.data.push(
        Math.round((this.discardedCart / this.totalCart) * 100)
      );

      const chartData = {
        datasets: [datasets],
        labels: labels,
      };

      this.chartDataConfiguration = {
        data: chartData,
        type: 'doughnut',
        options,
      };
      this.baseChart?.update();
    });

    // $blueDark: #18558f;
    // $blueLight: #eefbfb;
    // $orangeCustom: #ffb976;
  }
}
