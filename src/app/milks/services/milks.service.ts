import {Injectable} from '@angular/core';
import {Milk} from "../model/milk";
import {HttpClient} from "@angular/common/http";
import {first, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MilksService {

  //private readonly API = '/v1/milk/'
  private readonly API = '/assets/milks.json'

  constructor(private httpClient: HttpClient) {
  }

  list() {
    return this.httpClient.get<Milk[]>(this.API).pipe(
      first(),
      tap(milks => console.log(milks))
    );
  }
}
