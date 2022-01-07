import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from 'src/app/models/Data';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  datasShop!: BehaviorSubject<Data[]>;
  dataCard!: BehaviorSubject<Data>;
  visites!: number;
  visitesTotal!: number;
  commandes!: number;
  commandesTotal!: number;
  paniers!: number;
  paniersTotal!: number;

  constructor() {
    this.datasShop = new BehaviorSubject<Data[]>(this.createDatas());
  }

  generateNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1));
  }

  createDatas(): Data[] {
    const datasShop = [];

    this.visitesTotal = this.generateNumber(0, 1500);
    this.visites = this.visitesTotal;
    for (let i = 0; i < 12; i++) {
      datasShop.push(
        new Data(
          i,
          'visite',
          this.generateNumber(1, this.visites),
          'date i',
          'Nombre de visites'
        )
      );
      // this.visites = this.visites - datasShop[i].dataValue;
    }

    this.paniersTotal = this.generateNumber(1, this.visitesTotal);
    this.paniers = this.paniersTotal;
    for (let i = 12; i < 24; i++) {
      datasShop.push(
        new Data(
          i,
          'panier',
          this.generateNumber(1, this.paniers),
          'date i',
          'Nombre de paniers'
        )
      );
      // this.paniers = this.paniers - datasShop[i].dataValue;
    }

    this.commandesTotal = this.generateNumber(0, this.paniersTotal);
    this.commandes = this.commandesTotal;
    for (let i = 24; i < 36; i++) {
      datasShop.push(
        new Data(
          i,
          'commande',
          this.generateNumber(0, this.commandes),
          'date i',
          'Nombre de commandes'
        )
      );
      // this.commandes = this.commandes - datasShop[i].dataValue;
    }

    datasShop.push(
      new Data(
        36,
        'commandeNbr',
        this.commandesTotal,
        'date',
        'Nombre de commandes'
      )
    );
    datasShop.push(
      new Data(
        37,
        'newCustomers',
        this.generateNumber(1, this.commandesTotal),
        'date',
        'Nombre de nouveaux clients'
      )
    );
    datasShop.push(
      new Data(38, 'cartsNbr', this.paniersTotal, 'date', 'Nombre de paniers')
    );
    datasShop.push(
      new Data(
        39,
        'totalSales',
        this.generateNumber(1, 1000),
        'date',
        'Montant total des ventes'
      )
    );
    datasShop.push(
      new Data(
        40,
        'avgValue',
        Math.round(datasShop[39].dataValue / 12),
        'date',
        'Panier moyen'
      )
    );
    datasShop.push(
      new Data(
        41,
        'recurrence',
        Math.round(
          ((this.commandesTotal - datasShop[37].dataValue) /
            this.commandesTotal) *
            100
        ),
        'date',
        'Récurrence de commandes client'
      )
    );
    datasShop.push(
      new Data(
        42,
        'discardedCart',
        this.paniersTotal - this.commandesTotal,
        'date',
        'Nombre de paniers annulés'
      )
    );
    datasShop.push(
      new Data(
        43,
        'convertedVisites',
        Math.round((this.paniersTotal / this.visitesTotal) * 100),
        'date',
        'Taux de visites converties en création de panier'
      )
    );
    datasShop.push(
      new Data(
        44,
        'convertedOrders',
        Math.round((this.commandesTotal / this.paniersTotal) * 100),
        'date',
        'Taux de paniers converties en commande'
      )
    );
    // console.log(
    //   'visites: ' +
    //     this.visitesTotal +
    //     ' paniers:' +
    //     this.paniersTotal +
    //     ' commandes:' +
    //     this.commandesTotal
    // );
    // console.log(datasShop);

    return datasShop;
  }

  randomize(): void {
    this.datasShop.next(this.createDatas());
    // console.log(this.datasShop.getValue());
  }
}
