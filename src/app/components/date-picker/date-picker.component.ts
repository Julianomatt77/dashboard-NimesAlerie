import { Component, OnInit } from '@angular/core';

import { DatasService } from 'src/app/services/datas/datas.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  constructor(private datasService: DatasService) {}

  ngOnInit(): void {}

  updateData(): void {
    this.datasService.randomizeCard();
    console.log(this.datasService.datasShop);
  }
}
