import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/Data';
import { DatasService } from 'src/app/services/datas/datas.service';

@Component({
  selector: 'app-row-item',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.css'],
})
export class RowItemComponent implements OnInit {
  // datasShop!: Data[];
  // dataCard!: Data;

  datasCard!: Data[];
  constructor(private datasService: DatasService) {}

  ngOnInit(): void {
    this.datasCard = [];
    for (let i = 0; i < this.datasService.datasShop.length; i++) {
      if (this.datasService.datasShop[i].id >= 36) {
        this.datasCard.push(this.datasService.datasShop[i]);
      }
      // this.datasService.dataCard.subscribe((dataCard: Data) => {
      //   this.dataCard = dataCard;
      //   this.data = this.dataCard.dataValue;
      // });
    }
    console.log(this.datasCard);
  }
}
