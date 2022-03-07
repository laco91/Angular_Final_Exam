import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
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

  // Get Datas
  getAllDrinks() {
    return this.http.get<Menu[]>(`${environment.jsonUrl}/drinks`, httpOption);
  }

  getAllMainDishes() {
    return this.http.get<Menu[]>(`${environment.jsonUrl}/mainDishes`, httpOption);
  }

  getAllSushi() {
    return this.http.get<Menu[]>(`${environment.jsonUrl}/sushi`, httpOption);
  }

  getAllDeserts() {
    return this.http.get<Menu[]>(`${environment.jsonUrl}/desserts`, httpOption);
  }

  // Add New Supply
  addDrink(drink: Menu) {
    return this.http.post<Menu>(`${environment.jsonUrl}/drinks`, drink, httpOption)
    .pipe(
        tap(drink => console.log(`New drink = ${JSON.stringify(drink)}`)),
        catchError(error => error)
      );
  }

  addMainDish(mainDish: Menu) {
    return this.http.post<Menu>(`${environment.jsonUrl}/mainDishes`, mainDish, httpOption)
    .pipe(
      tap(mainDish => console.log(`New main dishes = ${JSON.stringify(mainDish)}`)),
      catchError(error => error)
    );
  }

  addSushi(sushi: Menu) {
    return this.http.post<Menu>(`${environment.jsonUrl}/sushi`, sushi, httpOption)
    .pipe(
      tap(sushi => console.log(`New sushi = ${JSON.stringify(sushi)}`)),
      catchError(error => error)
    );
  }

  addDessert(dessert: Menu) {
    return this.http.post<Menu>(`${environment.jsonUrl}/desserts`, dessert, httpOption)
    .pipe(
      tap(dessert => console.log(`New main dessert = ${JSON.stringify(dessert)}`)),
      catchError(error => error)
    );
  }

}