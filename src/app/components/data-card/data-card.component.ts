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

  constructor(private datasService: DatasService) {}

  ngOnInit(): void {}
}
