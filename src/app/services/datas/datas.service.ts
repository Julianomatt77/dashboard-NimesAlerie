import { Injectable } from '@angular/core';
import { Data } from 'src/app/models/Data';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  datasVisite: Data[];
  datasPanier: Data[];
  datasShop: Data[];

  constructor() {
    this.datasVisite = [];
    this.datasPanier = [];
    this.datasShop = [];

    // création du tableau

    this.datasShop = [
      new Data(0, 'visite', 120, 'Janvier'),
      new Data(1, 'visite', 80, 'Février'),
      new Data(2, 'visite', 45, 'Mars'),
      new Data(3, 'visite', 25, 'Avril'),
      new Data(4, 'visite', 70, 'Mai'),
      new Data(5, 'visite', 30, 'Juin'),
      new Data(6, 'visite', 90, 'Juillet'),
      new Data(7, 'visite', 65, 'Aout'),
      new Data(8, 'visite', 47, 'Septembre'),
      new Data(9, 'visite', 42, 'Octobre'),
      new Data(10, 'visite', 66, 'Novembre'),
      new Data(11, 'visite', 143, 'Décembre'),
      new Data(12, 'panier', 88, 'Janvier'),
      new Data(13, 'panier', 66, 'Février'),
      new Data(14, 'panier', 33, 'Mars'),
      new Data(15, 'panier', 16, 'Avril'),
      new Data(16, 'panier', 58, 'Mai'),
      new Data(17, 'panier', 17, 'Juin'),
      new Data(18, 'panier', 71, 'Juillet'),
      new Data(19, 'panier', 52, 'Aout'),
      new Data(20, 'panier', 39, 'Septembre'),
      new Data(21, 'panier', 37, 'Octobre'),
      new Data(22, 'panier', 62, 'Novembre'),
      new Data(23, 'panier', 124, 'Décembre'),
    ];

    // this.datasVisite = [
    //   new Data(0, 'visite', 120, 'Janvier'),
    //   new Data(1, 'visite', 80, 'Février'),
    //   new Data(2, 'visite', 45, 'Mars'),
    //   new Data(3, 'visite', 25, 'Avril'),
    //   new Data(4, 'visite', 70, 'Mai'),
    //   new Data(5, 'visite', 30, 'Juin'),
    //   new Data(6, 'visite', 90, 'Juillet'),
    //   new Data(7, 'visite', 65, 'Aout'),
    //   new Data(8, 'visite', 47, 'Septembre'),
    //   new Data(9, 'visite', 42, 'Octobre'),
    //   new Data(10, 'visite', 66, 'Novembre'),
    //   new Data(11, 'visite', 143, 'Décembre'),
    // ];

    // this.datasPanier = [
    //   new Data(0, 'panier', 88, 'Janvier'),
    //   new Data(1, 'panier', 66, 'Février'),
    //   new Data(2, 'panier', 33, 'Mars'),
    //   new Data(3, 'panier', 16, 'Avril'),
    //   new Data(4, 'panier', 58, 'Mai'),
    //   new Data(5, 'panier', 17, 'Juin'),
    //   new Data(6, 'panier', 71, 'Juillet'),
    //   new Data(7, 'panier', 52, 'Aout'),
    //   new Data(8, 'panier', 39, 'Septembre'),
    //   new Data(9, 'panier', 37, 'Octobre'),
    //   new Data(10, 'panier', 62, 'Novembre'),
    //   new Data(11, 'panier', 124, 'Décembre'),
    // ];
  }

  // getDataById(dataId: number): Promise<Data> {
  //   return new Promise<Data>((res, rej) => {
  //     //for (let book of this.books)

  //     for (let data of this.datasVisite) {
  //       if (data.id === dataId) {
  //         res(data);
  //         break;
  //       }
  //     }
  //   });
  // }
}
