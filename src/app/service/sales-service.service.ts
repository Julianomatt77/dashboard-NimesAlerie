import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sales } from '../interfaces/sales';

@Injectable({
  providedIn: 'root',
})
export class SalesServiceService {
  private apiUrl = 'http://127.0.0.1:8000/api/bestSales?bestSales';
  // headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {}

  getBestSales(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
