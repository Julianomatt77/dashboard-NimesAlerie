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

    // création du tableau (récup des données)
    for (let i = 0; i < 12; i++) {
      this.datasShop = [
        new Data(i, 'visite', 120, 'Janvier'),
        new Data(i, 'visite', 80, 'Février'),
        new Data(i, 'visite', 45, 'Mars'),
        new Data(i, 'visite', 25, 'Avril'),
        new Data(i, 'visite', 70, 'Mai'),
        new Data(i, 'visite', 30, 'Juin'),
        new Data(i, 'visite', 90, 'Juillet'),
        new Data(i, 'visite', 65, 'Aout'),
        new Data(i, 'visite', 47, 'Septembre'),
        new Data(i, 'visite', 42, 'Octobre'),
        new Data(i, 'visite', 66, 'Novembre'),
        new Data(i, 'visite', 143, 'Décembre'),
        new Data(i, 'panier', 88, 'Janvier'),
        new Data(i, 'panier', 66, 'Février'),
        new Data(i, 'panier', 33, 'Mars'),
        new Data(i, 'panier', 16, 'Avril'),
        new Data(i, 'panier', 58, 'Mai'),
        new Data(i, 'panier', 17, 'Juin'),
        new Data(i, 'panier', 71, 'Juillet'),
        new Data(i, 'panier', 52, 'Aout'),
        new Data(i, 'panier', 39, 'Septembre'),
        new Data(i, 'panier', 37, 'Octobre'),
        new Data(i, 'panier', 62, 'Novembre'),
        new Data(i, 'panier', 124, 'Décembre'),
        new Data(i, 'commande', 80, 'Janvier'),
        new Data(i, 'commande', 60, 'Février'),
        new Data(i, 'commande', 25, 'Mars'),
        new Data(i, 'commande', 5, 'Avril'),
        new Data(i, 'commande', 40, 'Mai'),
        new Data(i, 'commande', 10, 'Juin'),
        new Data(i, 'commande', 60, 'Juillet'),
        new Data(i, 'commande', 50, 'Aout'),
        new Data(i, 'commande', 30, 'Septembre'),
        new Data(i, 'commande', 35, 'Octobre'),
        new Data(i, 'commande', 50, 'Novembre'),
        new Data(i, 'commande', 110, 'Décembre'),
      ];
    }
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
