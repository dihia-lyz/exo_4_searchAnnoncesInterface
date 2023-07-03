import { Injectable } from '@angular/core';
import { Filter } from '../classes/filter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private baseUrl = "http://localhost:8080/annonce/";

  constructor(private http: HttpClient) { }

  getData(filter: Filter): Observable<any> {
    let url = this.baseUrl + "search";
    return this.http.post(url, filter).pipe(map(response => response));
  }
}
