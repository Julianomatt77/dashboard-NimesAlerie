import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from 'src/app/models/Data';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  datasShop!: Data[];
  // datasShop!: BehaviorSubject<Data>;

  dataCard!: BehaviorSubject<Data>;

  constructor() {
    // Cards datas
    const dataCard = new Data(
      36,
      'commandeNbr',
      this.generateNumber(1),
      'date'
    );
    this.dataCard = new BehaviorSubject<Data>(dataCard);

    //************************************************************************************ */

    this.datasShop = [];
    // const datasShops = [];
    // for (let i = 0; i < 12; i++) {
    //   datasShops.push(new Data(i, 'visite', this.generateNumber(i), 'date i'));
    // }

    // création du tableau par type de données
    for (let i = 0; i < 12; i++) {
      this.datasShop.push(
        new Data(i, 'visite', this.generateNumber(i), 'date i')
      );
    }

    for (let i = 12; i < 24; i++) {
      this.datasShop.push(
        new Data(i, 'commande', this.generateNumber(i), 'date i')
      );
    }

    for (let i = 24; i < 36; i++) {
      this.datasShop.push(
        new Data(i, 'panier', this.generateNumber(i), 'date i')
      );
    }

    this.datasShop.push(
      new Data(36, 'commandeNbr', this.generateNumber(36), 'date')
    );
    this.datasShop.push(
      new Data(37, 'newCustomers', this.generateNumber(37), 'date')
    );
    this.datasShop.push(
      new Data(38, 'newCarts', this.generateNumber(38), 'date')
    );
    this.datasShop.push(
      new Data(39, 'totalSales', this.generateNumber(39), 'date')
    );
    this.datasShop.push(
      new Data(40, 'avgValue', this.generateNumber(40), 'date')
    );

    // this.datasShop = new BehaviorSubject<Data>(datasShop);

    console.log(this.datasShop);
    // console.log(datasShops);
  }

  generateNumber(i: number): number {
    return Math.floor(Math.random() * (i < 2 ? 100 : 500) + 1);
  }

  // randomize(): void {
  //   this.datasShop = [];
  //   for (let i = 0; i < 12; i++) {
  //     this.datasShop.push(
  //       new Data(i, 'visite', this.generateNumber(i), 'date i')
  //     );
  //   }
  //   for (let i = 12; i < 24; i++) {
  //     this.datasShop.push(
  //       new Data(i, 'commande', this.generateNumber(i), 'date i')
  //     );
  //   }
  //   for (let i = 24; i < 36; i++) {
  //     this.datasShop.push(
  //       new Data(i, 'panier', this.generateNumber(i), 'date i')
  //     );
  //   }
  //   this.datasShop.push(
  //     new Data(36, 'commandeNbr', this.generateNumber(25), 'date')
  //   );
  //   this.datasShop.push(
  //     new Data(37, 'newCustomers', this.generateNumber(26), 'date')
  //   );
  //   this.datasShop.push(
  //     new Data(38, 'newCarts', this.generateNumber(27), 'date')
  //   );
  //   // this.baseChart?.update();
  // }

  /***************************************************/
  randomizeCard(): void {
    const dataCard = this.dataCard.getValue();
    dataCard.dataValue = this.generateNumber(1);
    this.dataCard.next(dataCard);
  }
}
