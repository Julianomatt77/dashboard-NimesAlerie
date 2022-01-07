import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/models/Data';
import { DatasService } from 'src/app/services/datas/datas.service';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css'],
})
export class DataCardComponent implements OnInit {
  @Input() data!: number;
  @Input() type!: string;
  @Input() label!: string;
  symbol!: string;

  constructor(private datasService: DatasService) {}

  ngOnInit(): void {
    switch (this.type) {
      case 'recurrence':
      case 'convertedVisites':
      case 'convertedOrders':
        this.symbol = '%';
        break;

      case 'totalSales':
      case 'avgValue':
        this.symbol = '€';
        break;
      default:
        this.symbol = '';
    }
  }
}
