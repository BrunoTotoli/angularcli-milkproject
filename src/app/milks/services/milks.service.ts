import { Injectable } from '@angular/core';
import {Milk} from "../model/milk";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MilksService {

  constructor(private httpClient:HttpClient) { }

  findAll():Milk[] {
    return [
      {_id: 1, quantity: 134,periodTime:'Tarde',date:'12/04/2022'},
      {_id: 2, quantity: 114,periodTime:'Tarde',date:'13/04/2022'},
      {_id: 3, quantity: 124,periodTime:'Tarde',date:'14/04/2022'},
      {_id: 4, quantity: 104,periodTime:'Tarde',date:'15/04/2022'},
      {_id: 5, quantity: 164,periodTime:'Tarde',date:'16/04/2022'}
    ];
  }
}
