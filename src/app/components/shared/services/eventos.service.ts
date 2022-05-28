import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Evento } from '../model/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private readonly API = 'api/eventos';

  constructor(private httpClient: HttpClient) { }

  // list() {
  //   return this.httpClient.get<Evento[]>(this.API)
  //   .pipe(
  //     first(),
  //     tap(eventos => console.log(eventos))
      
  //   );
  // }

  list() {
    return  this.httpClient.get<Evento[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
      tap(eventos => console.log(eventos))
    );
  }

  save(record: Evento) {
    return this.httpClient.post<Evento>(this.API, record).pipe(first());
  }
}
