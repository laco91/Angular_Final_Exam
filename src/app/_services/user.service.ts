import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(`${environment.jsonUrl}/users`, httpOption);
  }

  // Add user
  addUser(user: User) {
    return this.http.post<User>(`${environment.jsonUrl}/users`, user, httpOption)
    .pipe(
      tap(user => console.log(`New user = ${JSON.stringify(user)}`)),
      catchError(error => error)
    );
  }

  // Delete user
  deleteThisUser(id: number) {
    return this.http.delete<User>(`${environment.jsonUrl}/users/${id}`, httpOption)
      .pipe(
        tap(user => console.log(`Deleted user: ${JSON.stringify(user)}`)),
        catchError(error => error)
      );
  };

  // Update user
  updateUser(user: User, id: number) {
    return this.http.put<User>(`${environment.jsonUrl}/users/${id}`, user, httpOption)
      .pipe(
        tap(user => console.log(`Edited user: ${JSON.stringify(user)}`)),
        catchError(error => error)
      )
  }
}