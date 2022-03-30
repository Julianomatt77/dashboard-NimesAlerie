import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sales } from 'src/app/interfaces/sales';
import { Data } from 'src/app/models/Data';
import { DatasService } from 'src/app/services/datas/datas.service';
// import { OrderByPipe } from '../../pipes/order-by.pipe';
import { SalesServiceService } from '../../service/sales-service.service';

@Component({
  selector: 'app-row-item',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.css'],
})
export class RowItemComponent implements OnInit {
  datasCard!: Data[];
  dataSub!: Subscription;
  type!: string;
  // products!: Array<{
  //   id: number;
  //   name: string;
  //   description: string;
  //   vente: number;
  // }>;

  /**************** for datas from api ************** */
  products!: any;
  dataSales: any;
  // isLoading = true;

  constructor(
    private datasService: DatasService, // private orderByPipe: OrderByPipe,
    private salesService: SalesServiceService
  ) {}

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

    /********** Datas from api  ************** */
    this.salesService.getBestSales().subscribe((data) => {
      // console.log(data.bestSales[83].name);
      this.dataSales = data.bestSales;

      // this.dataSales.forEach((element: any) => {
      //   console.log(this.dataSales[element]);
      // });

      // console.log(this.dataSales);
      this.products = [];
      for (let i = 0; i < 5000; i++) {
        if (this.dataSales[i] != null) {
          this.products.push({
            id: this.dataSales[i].id,
            name: this.dataSales[i].name,
            nbSales: this.dataSales[i].nbSales,
          });
        }
        // console.log(this.products);
      }
      console.log(this.products);

      /*************** Fin datas from api *************** */

      // this.dataSales.forEach((element: any) => {
      //   console.log(this.dataSales[element]);
      // });

      // this.products = data.bestSales;
      // console.log(this.products);

      // this.isLoading = false;
    });

    // this.products = [
    //   {
    //     id: 0,
    //     name: 'Produit 1',
    //     description: 'Description du produit',
    //     vente: 250,
    //   },
    //   {
    //     id: 1,
    //     name: 'Produit 2',
    //     description: 'Description du produit',
    //     vente: 150,
    //   },
    //   {
    //     id: 2,
    //     name: 'Produit 3',
    //     description: 'Description du produit',
    //     vente: 175,
    //   },
    //   {
    //     id: 3,
    //     name: 'Produit 4',
    //     description: 'Description du produit',
    //     vente: 288,
    //   },
    //   {
    //     id: 4,
    //     name: 'Produit 5',
    //     description: 'Description du produit',
    //     vente: 321,
    //   },
    //   {
    //     id: 5,
    //     name: 'Produit 6',
    //     description: 'Description du produit',
    //     vente: 122,
    //   },
    //   {
    //     id: 6,
    //     name: 'Produit 7',
    //     description: 'Description du produit',
    //     vente: 110,
    //   },
    //   {
    //     id: 7,
    //     name: 'Produit 8',
    //     description: 'Description du produit',
    //     vente: 223,
    //   },
    //   {
    //     id: 8,
    //     name: 'Produit 9',
    //     description: 'Description du produit',
    //     vente: 262,
    //   },
    //   {
    //     id: 9,
    //     name: 'Produit 10',
    //     description: 'Description du produit',
    //     vente: 158,
    //   },
    //   {
    //     id: 10,
    //     name: 'Produit 11',
    //     description: 'Description du produit',
    //     vente: 450,
    //   },
    // ];

    // const aaaa = this.orderByPipe.transform(this.products, 'desc', 'vente');

    // console.log(sortedArr);
  }

  // sortedArr(): void {
  //   this.products = this.orderByPipe.transform(this.products, 'asc', 'vente');
  // }
  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
