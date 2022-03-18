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

  //============
  // GET DATAS
  //============
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

  //=================
  // ADD NEW PRODUCT
  //=================
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

  //================
  // UPDATE PRODUCT
  //================
  updateDrink(drink: Menu, id: number) {
    return this.http.put<Menu>(`${environment.jsonUrl}/drinks/${id}`, drink, httpOption)
    .pipe(
      tap(updatedDrink => console.log(`Updated drink = ${JSON.stringify(updatedDrink)}`)),
      catchError(error => error)
      );
  }

  updateMainDish(mainDish: Menu, id: number) {
    return this.http.put<Menu>(`${environment.jsonUrl}/mainDishes/${id}`, mainDish, httpOption)
    .pipe(
      tap(updatedMainDish => console.log(`Updated main dish = ${JSON.stringify(updatedMainDish)}`)),
      catchError(error => error)
      );
  }

  updateSushi(sushi: Menu, id: number) {
    return this.http.put<Menu>(`${environment.jsonUrl}/sushi/${id}`, sushi, httpOption)
    .pipe(
      tap(updatedSushi => console.log(`Updated sushi = ${JSON.stringify(updatedSushi)}`)),
      catchError(error => error)
      );
  }

  updateDessert(dessert: Menu, id: number) {
    return this.http.put<Menu>(`${environment.jsonUrl}/desserts/${id}`, dessert, httpOption)
    .pipe(
      tap(updatedDessert => console.log(`Updated dessert = ${JSON.stringify(updatedDessert)}`)),
      catchError(error => error)
      );
  }

  //================
  // DELETE PRODUCT
  //================
  deleteDrink(id: number) {
    return this.http.delete<Menu>(`${environment.jsonUrl}/drinks/${id}`, httpOption)
    .pipe(
      tap(deletedDrink => console.log(`Deleted drink = ${JSON.stringify(deletedDrink)}`)),
      catchError(error => error)
      );
  }

  deleteMainDish(id: number) {
    return this.http.delete<Menu>(`${environment.jsonUrl}/mainDishes/${id}`, httpOption)
    .pipe(
      tap(deletedMainDish => console.log(`Deleted main dish = ${JSON.stringify(deletedMainDish)}`)),
      catchError(error => error)
      );
  }

  deleteSushi(id: number) {
    return this.http.delete<Menu>(`${environment.jsonUrl}/sushi/${id}`, httpOption)
    .pipe(
      tap(deletedSushi => console.log(`Deleted sushi = ${JSON.stringify(deletedSushi)}`)),
      catchError(error => error)
      );
  }

  deleteDessert(id: number) {
    return this.http.delete<Menu>(`${environment.jsonUrl}/desserts/${id}`, httpOption)
    .pipe(
      tap(deletedDessert => console.log(`Deleted dessert = ${JSON.stringify(deletedDessert)}`)),
      catchError(error => error)
      );
  }

}