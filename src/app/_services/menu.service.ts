import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Menu } from '../_models/model_collector';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getAllDrink() {
    return this.http.get<Menu[]>(`${environment.jsonUrl}/drinks`, httpOption);
  }

  getAllMainDish() {
    return this.http.get<Menu[]>(`${environment.jsonUrl}/mainDishes`, httpOption);
  }

  getAllSushi() {
    return this.http.get<Menu[]>(`${environment.jsonUrl}/sushi`, httpOption);
  }

  getAllDesert() {
    return this.http.get<Menu[]>(`${environment.jsonUrl}/desserts`, httpOption);
  }
}