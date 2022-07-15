import {Component, OnInit} from '@angular/core';
import {Milk} from "../model/milk";
import {MilksService} from "../services/milks.service";


@Component({
  selector: 'app-milks',
  templateUrl: './milks.component.html',
  styleUrls: ['./milks.component.scss']
})
export class MilksComponent implements OnInit{
  milks: Milk[] = [
    {_id: 1, quantity: 134,periodTime:'Tarde',date:'12/04/2022'},
    {_id: 2, quantity: 114,periodTime:'Tarde',date:'13/04/2022'},
    {_id: 3, quantity: 124,periodTime:'Tarde',date:'14/04/2022'},
    {_id: 4, quantity: 104,periodTime:'Tarde',date:'15/04/2022'},
    {_id: 5, quantity: 164,periodTime:'Tarde',date:'16/04/2022'}
  ];


  constructor(private milksService:MilksService) {
  }

  ngOnInit(): void {
    this.milksService.findAll();
  }

  displayedColumns: string[] = ['quantity', 'periodTime', 'date'];
}
