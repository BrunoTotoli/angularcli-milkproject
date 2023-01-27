import {Injectable} from '@angular/core';
import {Milk} from "../model/milk";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {first, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MilksService {

  private readonly API = 'http://localhost:8080/v1/milk/'


  constructor(private httpClient: HttpClient) {
  }

  list() {
    const headers = new HttpHeaders({Authorization: 'Basic '+ btoa('admin' + ':'+ 'senha') })
    return this.httpClient.get<Milk[]>(this.API,{headers}).pipe(
      first(),
      tap(milks => console.log(milks))
    );
  }
}
