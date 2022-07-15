import {Component} from '@angular/core';
import {Milk} from "../model/milk";


@Component({
  selector: 'app-milks',
  templateUrl: './milks.component.html',
  styleUrls: ['./milks.component.scss']
})
export class MilksComponent {
  milks: Milk[] = [
    {_id: 1, quantity: 134,periodTime:'Tarde',date:'12/04/2022'},
    {_id: 2, quantity: 114,periodTime:'Tarde',date:'13/04/2022'},
    {_id: 3, quantity: 124,periodTime:'Tarde',date:'14/04/2022'},
    {_id: 4, quantity: 104,periodTime:'Tarde',date:'15/04/2022'},
    {_id: 5, quantity: 164,periodTime:'Tarde',date:'16/04/2022'}
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

  displayedColumns: string[] = ['quantity', 'periodTime', 'date'];
}
