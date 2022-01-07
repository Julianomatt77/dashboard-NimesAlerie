import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Data } from 'src/app/models/Data';
import { DatasService } from 'src/app/services/datas/datas.service';

@Component({
  selector: 'app-row-item',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.css'],
})
export class RowItemComponent implements OnInit {
  datasCard!: Data[];
  dataSub!: Subscription;
  type!: string;

  constructor(private datasService: DatasService) {}

  ngOnInit(): void {
    this.dataSub = this.datasService.datasShop.subscribe((newData: Data[]) => {
      this.datasCard = [];
      for (let i = 0; i < newData.length; i++) {
        if (
          newData[i].type === 'commandeNbr' ||
          newData[i].type === 'newCustomers' ||
          newData[i].type === 'cartsNbr' ||
          newData[i].type === 'totalSales' ||
          newData[i].type === 'avgValue' ||
          newData[i].type === 'recurrence' ||
          newData[i].type === 'convertedVisites' ||
          newData[i].type === 'convertedOrders'
        ) {
          this.datasCard.push(newData[i]);
        }
      }
    });

    // for (let i = 0; i < this.datasCard.length; i++) {

    //   if (this.datasCard[i].type === 'commandeNbr') {
    //     this.datasCard[i].type = 'Nombre de commandes';
    //   }
    // }
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
