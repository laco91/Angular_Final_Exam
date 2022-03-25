import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gallery } from '../_models/model_collector';

const HttpOption = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getAllImages() {
    return this.http.get<Gallery[]>(`${environment.jsonUrl}/gallery`, HttpOption);
  }
}