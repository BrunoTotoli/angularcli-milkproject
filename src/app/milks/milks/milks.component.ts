import {Component, OnInit} from '@angular/core';
import {Milk} from "../model/milk";
import {MilksService} from "../services/milks.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-milks',
  templateUrl: './milks.component.html',
  styleUrls: ['./milks.component.scss']
})
export class MilksComponent implements OnInit {


  milks: Observable<Milk[]>;
  displayedColumns: string[] = ['quantity', 'periodTime', 'date'];

  constructor(private milksService: MilksService) {
    this.milks = milksService.list()
  }

  ngOnInit(): void {
  }


}
